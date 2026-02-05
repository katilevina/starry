#!/usr/bin/env node
/**
 * Perplexity Search Script
 * Выполняет поиск через Perplexity API с поддержкой различных форматов экспорта
 */

import { Perplexity } from '@perplexity-ai/perplexity_ai';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SearchOptions {
  query: string;
  limit?: number;
  domains?: string[];
  recency?: 'hour' | 'day' | 'week' | 'month' | 'year';
  format?: 'markdown' | 'json' | 'csv';
  output?: string;
  save?: boolean;
  model?: string;
  citations?: boolean;
}

class PerplexitySearcher {
  private client: Perplexity;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('❌ PERPLEXITY_API_KEY не найден в переменных окружения');
    }

    this.client = new Perplexity({
      apiKey: apiKey,
    });

    console.log('✓ Успешное подключение к Perplexity API');
  }

  /**
   * Выполняет поиск через Perplexity Search API
   */
  async search(options: SearchOptions): Promise<any> {
    try {
      console.log(`🔍 Поиск: "${options.query}"`);

      // Используем Search API
      const searchParams: any = {
        query: options.query,
      };

      if (options.limit) {
        searchParams.max_results = Math.min(options.limit, 20); // API ограничение
      }

      if (options.domains && options.domains.length > 0) {
        searchParams.search_domain_filter = options.domains.slice(0, 20); // Макс 20 доменов
      }

      if (options.recency) {
        searchParams.search_recency_filter = options.recency;
      }

      const response = await this.client.search.create(searchParams);

      console.log(`✓ Найдено результатов: ${response.results?.length || 0}`);

      return response;
    } catch (error) {
      console.error('❌ Ошибка при выполнении поиска:', error);
      throw error;
    }
  }

  /**
   * Выполняет chat completion с web grounding
   */
  async chatSearch(options: SearchOptions): Promise<any> {
    try {
      console.log(`🔍 Chat поиск: "${options.query}"`);

      const model = options.model || 'sonar';

      const response = await this.client.chat.completions.create({
        model: model,
        messages: [
          {
            role: 'user',
            content: options.query,
          },
        ],
      });

      console.log('✓ Получен ответ от Perplexity');

      return response;
    } catch (error) {
      console.error('❌ Ошибка при выполнении chat поиска:', error);
      throw error;
    }
  }

  /**
   * Экспорт результатов в Markdown
   */
  exportToMarkdown(response: any, query: string, options: SearchOptions): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    const lines: string[] = [];

    lines.push(`# Perplexity Search: ${query}`);
    lines.push('');
    lines.push(`**Дата:** ${new Date().toLocaleString('ru-RU')}`);
    lines.push(`**Запрос:** ${query}`);

    if (options.domains) {
      lines.push(`**Домены:** ${options.domains.join(', ')}`);
    }

    if (options.recency) {
      lines.push(`**Период:** ${options.recency}`);
    }

    lines.push('');
    lines.push('---');
    lines.push('');

    // Если это Chat Completion
    if (response.choices && response.choices.length > 0) {
      lines.push('## Ответ');
      lines.push('');
      lines.push(response.choices[0].message.content);
      lines.push('');

      if (response.citations && response.citations.length > 0) {
        lines.push('## Источники');
        lines.push('');
        response.citations.forEach((citation: string, idx: number) => {
          lines.push(`${idx + 1}. ${citation}`);
        });
        lines.push('');
      }
    }

    // Если это Search Results
    if (response.results && response.results.length > 0) {
      lines.push(`## Результаты (${response.results.length})`);
      lines.push('');

      response.results.forEach((result: any, index: number) => {
        lines.push(`### ${index + 1}. ${result.title}`);
        lines.push('');
        lines.push(`**URL:** ${result.url}`);

        if (result.date) {
          lines.push(`**Опубликовано:** ${result.date}`);
        }

        if (result.last_updated) {
          lines.push(`**Обновлено:** ${result.last_updated}`);
        }

        lines.push('');
        lines.push(result.snippet || 'Содержимое недоступно');
        lines.push('');
        lines.push('---');
        lines.push('');
      });
    }

    return lines.join('\n');
  }

  /**
   * Экспорт результатов в JSON
   */
  exportToJSON(response: any, query: string, options: SearchOptions): string {
    const exportData = {
      query: query,
      timestamp: new Date().toISOString(),
      options: {
        limit: options.limit,
        domains: options.domains,
        recency: options.recency,
        model: options.model,
      },
      response: response,
    };

    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Экспорт результатов в CSV
   */
  exportToCSV(response: any, query: string): string {
    const lines: string[] = [];

    // Header
    lines.push('Title,URL,Snippet,Date,Last Updated');

    if (response.results && response.results.length > 0) {
      response.results.forEach((result: any) => {
        const title = this.escapeCSV(result.title);
        const url = this.escapeCSV(result.url);
        const snippet = this.escapeCSV(result.snippet || '');
        const date = this.escapeCSV(result.date || '');
        const lastUpdated = this.escapeCSV(result.last_updated || '');

        lines.push(`${title},${url},${snippet},${date},${lastUpdated}`);
      });
    }

    return lines.join('\n');
  }

  /**
   * Экранирование строк для CSV
   */
  private escapeCSV(str: string): string {
    if (!str) return '""';

    // Заменяем переводы строк на пробелы и экранируем кавычки
    const cleaned = str.replace(/\r?\n/g, ' ').replace(/"/g, '""');
    return `"${cleaned}"`;
  }

  /**
   * Вывод или сохранение результатов
   */
  printOrSave(content: string, format: string, query: string, save: boolean, outputPath?: string): string | null {
    if (!save) {
      // Выводим в stdout
      console.log('\n' + content);
      return null;
    }

    // Сохраняем в файл
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5).replace('T', '_');
    const sanitizedQuery = query
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 50);

    const filename = outputPath || `perplexity_search_${sanitizedQuery}_${timestamp}.${format}`;
    // __dirname points to dist/ after compilation, so go up one level to scripts/
    const outDir = path.join(__dirname, '..', 'out');

    // Создаем директорию если не существует
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const filepath = path.join(outDir, path.basename(filename));
    fs.writeFileSync(filepath, content, 'utf-8');

    console.log(`\n✓ Результаты сохранены: ${filepath}`);
    return filepath;
  }
}

/**
 * Main function
 */
async function main() {
  const argv = await yargs(hideBin(process.argv))
    .usage('Usage: $0 <query> [options]')
    .command('$0 <query>', 'Поиск через Perplexity API', (yargs) => {
      return yargs.positional('query', {
        describe: 'Поисковый запрос',
        type: 'string',
      });
    })
    .option('limit', {
      alias: 'l',
      type: 'number',
      description: 'Количество результатов (макс 20)',
      default: 10,
    })
    .option('domains', {
      alias: 'd',
      type: 'array',
      description: 'Фильтр по доменам (макс 20)',
    })
    .option('recency', {
      alias: 'r',
      type: 'string',
      choices: ['day', 'week', 'month', 'year'],
      description: 'Фильтр по времени публикации',
    })
    .option('format', {
      alias: 'f',
      type: 'string',
      choices: ['markdown', 'json', 'csv'],
      default: 'markdown',
      description: 'Формат экспорта',
    })
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Путь для сохранения результатов (требует --save)',
    })
    .option('save', {
      alias: 's',
      type: 'boolean',
      default: false,
      description: 'Сохранить результаты в файл (по умолчанию вывод в stdout)',
    })
    .option('chat', {
      alias: 'c',
      type: 'boolean',
      default: false,
      description: 'Использовать Chat API вместо Search API',
    })
    .option('model', {
      alias: 'm',
      type: 'string',
      description: 'Модель для Chat API',
      default: 'sonar',
    })
    .option('citations', {
      type: 'boolean',
      default: true,
      description: 'Показывать источники (только для Chat API)',
    })
    .help()
    .alias('help', 'h')
    .example('$0 "machine learning trends 2024"', 'Базовый поиск')
    .example('$0 "AI news" -l 5 -r week', 'Поиск новостей за неделю')
    .example('$0 "python tutorials" -d python.org -d realpython.com', 'Поиск по конкретным доменам')
    .example('$0 "explain quantum computing" --chat', 'Использовать Chat API')
    .parse();

  try {
    const apiKey = process.env.PERPLEXITY_API_KEY;

    if (!apiKey) {
      console.error('❌ Ошибка: PERPLEXITY_API_KEY не найден');
      console.error('');
      console.error('Создайте файл .env с содержимым:');
      console.error('PERPLEXITY_API_KEY=your_api_key_here');
      console.error('');
      console.error('Получить API ключ: https://www.perplexity.ai/settings/api');
      process.exit(1);
    }

    const searcher = new PerplexitySearcher(apiKey);

    const options: SearchOptions = {
      query: argv.query as string,
      limit: argv.limit as number,
      domains: argv.domains as string[],
      recency: argv.recency as 'day' | 'week' | 'month' | 'year' | undefined,
      format: argv.format as 'markdown' | 'json' | 'csv',
      output: argv.output as string | undefined,
      save: argv.save as boolean,
      model: argv.model as string,
      citations: argv.citations as boolean,
    };

    // Выбираем API в зависимости от флага --chat
    const response = argv.chat
      ? await searcher.chatSearch(options)
      : await searcher.search(options);

    // Экспорт в нужном формате
    let content: string;
    let extension: string;

    switch (options.format) {
      case 'json':
        content = searcher.exportToJSON(response, options.query, options);
        extension = 'json';
        break;
      case 'csv':
        content = searcher.exportToCSV(response, options.query);
        extension = 'csv';
        break;
      case 'markdown':
      default:
        content = searcher.exportToMarkdown(response, options.query, options);
        extension = 'md';
        break;
    }

    // Вывод в stdout или сохранение в файл
    const filepath = searcher.printOrSave(content, extension, options.query, options.save || false, options.output);

    if (filepath) {
      console.log('');
      console.log('✅ Поиск завершен успешно');
      console.log(`📄 Файл: ${filepath}`);
    }

  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    process.exit(1);
  }
}

// Запуск
main();
