#!/bin/bash

# Скрипт для локальной сборки IPA через Xcode (требует Mac)
# Использование: ./build-local-xcode.sh

set -e

echo "🚀 Начинаем локальную сборку IPA через Xcode..."

# Проверяем, что мы на Mac
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ Этот скрипт работает только на macOS"
    exit 1
fi

# Переходим в директорию iOS
cd ios

# Устанавливаем зависимости CocoaPods
echo "📦 Устанавливаем CocoaPods зависимости..."
if ! command -v pod &> /dev/null; then
    echo "❌ CocoaPods не установлен. Установите его: sudo gem install cocoapods"
    exit 1
fi

pod install

# Возвращаемся в корень проекта
cd ..

# Создаем директорию для сборки
BUILD_DIR="build"
ARCHIVE_DIR="$BUILD_DIR/archive"
IPA_DIR="$BUILD_DIR/ipa"
mkdir -p "$ARCHIVE_DIR" "$IPA_DIR"

echo "🔨 Собираем архив через xcodebuild..."

# Очищаем предыдущие сборки
xcodebuild clean \
  -workspace ios/M10Wallet.xcworkspace \
  -scheme M10Wallet \
  -configuration Release

# Собираем архив
xcodebuild archive \
  -workspace ios/M10Wallet.xcworkspace \
  -scheme M10Wallet \
  -configuration Release \
  -archivePath "$ARCHIVE_DIR/M10Wallet.xcarchive" \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGNING_ALLOWED=NO \
  PROVISIONING_PROFILE_SPECIFIER=""

echo "📦 Экспортируем IPA..."

# Экспортируем IPA (ad-hoc для Trollstore)
xcodebuild -exportArchive \
  -archivePath "$ARCHIVE_DIR/M10Wallet.xcarchive" \
  -exportPath "$IPA_DIR" \
  -exportOptionsPlist exportOptions.plist \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGNING_ALLOWED=NO

# Находим созданный IPA файл
IPA_FILE=$(find "$IPA_DIR" -name "*.ipa" | head -n 1)

if [ -z "$IPA_FILE" ]; then
    echo "❌ IPA файл не найден!"
    exit 1
fi

echo "✅ IPA файл создан: $IPA_FILE"
echo "📱 Теперь вы можете установить его через Trollstore!"
echo ""
echo "Размер файла: $(du -h "$IPA_FILE" | cut -f1)"

