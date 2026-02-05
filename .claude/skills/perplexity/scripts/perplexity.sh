#!/bin/bash
# Perplexity Search Runner
# Автоматически устанавливает зависимости, компилирует TypeScript и запускает скрипт

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js не найден!${NC}"
    echo "Установите Node.js: https://nodejs.org/"
    exit 1
fi

# Проверка наличия npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm не найден!${NC}"
    echo "Установите npm вместе с Node.js: https://nodejs.org/"
    exit 1
fi

# Проверка и установка зависимостей
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Устанавливаю зависимости...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Ошибка установки зависимостей${NC}"
        exit 1
    fi
fi

# Проверка и компиляция TypeScript
if [ ! -d "dist" ] || [ "perplexity_search.ts" -nt "dist/perplexity_search.js" ]; then
    echo -e "${YELLOW}🔨 Компилирую TypeScript...${NC}"
    npm run build
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Ошибка компиляции TypeScript${NC}"
        exit 1
    fi
fi

# Проверка наличия .env файла
if [ ! -f ".env" ]; then
    echo -e "${RED}❌ Файл .env не найден!${NC}"
    echo ""
    echo "Создайте файл .env с содержимым:"
    echo "PERPLEXITY_API_KEY=your_api_key_here"
    echo ""
    echo "Получить API ключ: https://www.perplexity.ai/settings/api"
    exit 1
fi

# Запуск скрипта с переданными аргументами
node dist/perplexity_search.js "$@"
