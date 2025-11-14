#!/bin/bash

# Скрипт для локальной сборки IPA файла для Trollstore (требует Mac и Xcode)
# Использование: ./build-ipa-local.sh

set -e

echo "🚀 Начинаем локальную сборку IPA для Trollstore..."

# Переходим в директорию iOS
cd ios

# Устанавливаем зависимости
echo "📦 Устанавливаем CocoaPods зависимости..."
pod install

# Возвращаемся в корень проекта
cd ..

# Создаем директорию для сборки
BUILD_DIR="build"
IPA_DIR="$BUILD_DIR/ipa"
mkdir -p "$IPA_DIR"

echo "🔨 Собираем проект через xcodebuild..."

# Собираем архив
xcodebuild \
  -workspace ios/M10Wallet.xcworkspace \
  -scheme M10Wallet \
  -configuration Release \
  -archivePath "$BUILD_DIR/M10Wallet.xcarchive" \
  archive \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGNING_ALLOWED=NO

echo "📦 Экспортируем IPA..."

# Экспортируем IPA (для ad-hoc distribution)
xcodebuild \
  -exportArchive \
  -archivePath "$BUILD_DIR/M10Wallet.xcarchive" \
  -exportPath "$IPA_DIR" \
  -exportOptionsPlist exportOptions.plist \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGNING_ALLOWED=NO

echo "✅ IPA файл создан: $IPA_DIR/M10Wallet.ipa"
echo "📱 Теперь вы можете установить его через Trollstore!"

