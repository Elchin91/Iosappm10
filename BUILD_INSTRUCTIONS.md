# Инструкции по сборке IPA для Trollstore

## Вариант 1: Облачная сборка через EAS Build (Рекомендуется)

Этот метод работает на любой операционной системе и не требует Mac.

### Шаги:

1. **Установите EAS CLI** (если еще не установлен):
   ```bash
   npm install -g eas-cli
   ```

2. **Войдите в EAS**:
   ```bash
   eas login
   ```

3. **Соберите IPA файл**:
   ```bash
   npm run build:ios:trollstore
   ```
   или
   ```bash
   eas build --platform ios --profile trollstore
   ```

4. **Скачайте IPA файл**:
   - После завершения сборки вы получите ссылку на IPA файл
   - Скачайте файл на ваш компьютер

5. **Установите через Trollstore**:
   - Откройте Trollstore на вашем iOS устройстве
   - Выберите "Install IPA File"
   - Выберите скачанный IPA файл
   - Дождитесь завершения установки

## Вариант 2: Локальная сборка (Требует Mac с Xcode)

Если у вас есть Mac, вы можете собрать IPA локально.

### Шаги:

1. **Установите зависимости**:
   ```bash
   cd ios
   pod install
   cd ..
   ```

2. **Соберите проект**:
   ```bash
   npm run build:ios:local
   ```

3. **Или используйте скрипт**:
   ```bash
   chmod +x build-ipa-local.sh
   ./build-ipa-local.sh
   ```

4. **Найдите IPA файл** в папке `build/ipa/`

## Вариант 3: Сборка через Xcode (Mac)

1. Откройте `ios/M10Wallet.xcworkspace` в Xcode
2. Выберите схему "M10Wallet" и устройство "Any iOS Device"
3. Product → Archive
4. После создания архива: Window → Organizer
5. Выберите архив и нажмите "Distribute App"
6. Выберите "Ad Hoc" или "Enterprise" для Trollstore
7. Экспортируйте IPA файл

## Примечания для Trollstore:

- Trollstore поддерживает IPA файлы с ad-hoc или enterprise подписью
- Убедитесь, что ваше устройство поддерживает Trollstore (iOS 14.0 - 15.4.1 или 15.5 beta, или iOS 16.0 - 16.6.1)
- Для установки через Trollstore не требуется Apple Developer аккаунт

## Troubleshooting:

Если возникают проблемы с подписью:
- Используйте ad-hoc distribution
- Или создайте provisioning profile для вашего устройства
- Для Trollstore можно использовать неподписанный IPA (но это может не работать на всех версиях iOS)

