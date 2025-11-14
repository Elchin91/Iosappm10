# Настройка GitHub Actions для автоматической сборки IPA

## Шаг 1: Получение токена Expo

1. Перейдите на https://expo.dev/accounts/[ваш-аккаунт]/settings/access-tokens
2. Нажмите "Create Token"
3. Дайте токену имя (например, "GitHub Actions")
4. Скопируйте созданный токен

## Шаг 2: Добавление секрета в GitHub

1. Перейдите в ваш репозиторий: https://github.com/Elchin91/Iosappm10
2. Откройте **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Имя: `EXPO_TOKEN`
5. Значение: вставьте токен из шага 1
6. Нажмите **Add secret**

## Шаг 3: Запуск сборки

### Вариант A: Через GitHub Actions UI

1. Перейдите в раздел **Actions** вашего репозитория
2. Выберите workflow **"Build iOS IPA (Simple)"**
3. Нажмите **"Run workflow"**
4. Выберите ветку **main**
5. Нажмите **"Run workflow"**
6. Дождитесь завершения сборки (обычно 10-15 минут)

### Вариант B: Через автоматический запуск

Workflow автоматически запустится при:
- Push в ветку main/master
- Изменении файлов в папках: app/, components/, ios/, package.json, app.json, eas.json

## Шаг 4: Получение IPA файла

После завершения сборки:

1. В разделе **Actions** найдите завершенный workflow
2. Нажмите на него
3. Прокрутите вниз до секции **Artifacts**
4. Скачайте файл **M10Wallet-IPA**
5. Распакуйте архив - внутри будет файл **M10Wallet.ipa**

## Шаг 5: Установка через Trollstore

1. Передайте файл M10Wallet.ipa на ваше iOS устройство (через AirDrop, email, или облачное хранилище)
2. Откройте **Trollstore** на устройстве
3. Нажмите **"Install IPA File"**
4. Выберите файл **M10Wallet.ipa**
5. Дождитесь завершения установки

## Troubleshooting

### Ошибка: "EXPO_TOKEN not found"
- Убедитесь, что секрет `EXPO_TOKEN` добавлен в Settings → Secrets

### Ошибка: "Build failed"
- Проверьте логи в разделе Actions
- Убедитесь, что токен Expo действителен
- Проверьте, что все зависимости указаны в package.json

### IPA файл не создается
- Проверьте, что профиль `trollstore` правильно настроен в eas.json
- Убедитесь, что у вас есть активный аккаунт Expo

## Полезные ссылки

- [Expo EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Trollstore Installation Guide](https://github.com/opa334/TrollStore)

