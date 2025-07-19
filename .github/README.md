# GitHub Actions Workflows

Цей каталог містить конфігурації CI/CD для автоматизації тестування та деплою.

## Workflows

### 1. CI Pipeline (`.github/workflows/ci.yml`)

**Призначення:** Тестування та валідація коду

**Тригери:**
- Push до main branch
- Pull Request до main branch

**Кроки:**
- ✅ Checkout коду
- ✅ Setup Node.js (18.x, 20.x)
- ✅ Встановлення залежностей (`npm run ci`)
- ✅ Запуск тестів (`npm test`)
- ✅ Тести з покриттям (`npm run test:coverage`)
- ✅ Збірка проекту (`npm run build`)
- ✅ Upload coverage reports до Codecov

### 2. Deploy Pipeline (`.github/workflows/deploy.yml`)

**Призначення:** Автоматичний деплой на AWS S3

**Тригери:**
- Push до main branch

**Кроки:**
- ✅ Checkout коду
- ✅ Setup Node.js 18
- ✅ Встановлення залежностей (`npm run ci`)
- ✅ Запуск тестів (`npm test`)
- ✅ Production збірка (`npm run build`)
- ✅ Налаштування AWS credentials
- ✅ Синхронізація з S3 bucket
- ✅ Invalidate CloudFront cache

## Secrets

Для роботи deploy workflow потрібні наступні secrets:

- `AWS_ACCESS_KEY_ID` - AWS Access Key
- `AWS_SECRET_ACCESS_KEY` - AWS Secret Key
- `AWS_REGION` - AWS Region (наприклад, us-east-1)
- `BUCKET_ID` - S3 Bucket name
- `DISTRIBUTION_ID` - CloudFront Distribution ID

## Налаштування

1. Перейдіть до Settings > Secrets and variables > Actions
2. Додайте всі необхідні secrets
3. Push до main branch для активації workflows

## Переваги

- ✅ **Автоматизація** - тестування та деплой при кожному push
- ✅ **Безпека** - secrets захищені
- ✅ **Швидкість** - кешування npm залежностей
- ✅ **Надійність** - тести перед деплоєм
- ✅ **Моніторинг** - coverage reports 
