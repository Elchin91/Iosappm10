#!/bin/bash

# Скрипт для сборки IPA файла для Trollstore
# Использование: ./build-ipa.sh

echo "🚀 Начинаем сборку IPA для Trollstore..."

# Проверяем наличие EAS CLI
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI не установлен. Устанавливаем..."
    npm install -g eas-cli
fi

# Логинимся в EAS (если нужно)
echo "📝 Проверяем авторизацию в EAS..."
eas whoami || eas login

# Собираем IPA для Trollstore
echo "🔨 Собираем IPA файл..."
eas build --platform ios --profile trollstore --non-interactive

echo "✅ Сборка завершена! IPA файл будет доступен в EAS Dashboard."
echo "📱 Для установки через Trollstore:"
echo "   1. Скачайте IPA файл из EAS Dashboard"
echo "   2. Откройте Trollstore на вашем устройстве"
echo "   3. Выберите IPA файл и установите"

