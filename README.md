# CLI Додаток для управління контактами

Це консольний додаток для роботи з контактами. Дозволяє переглядати, додавати, видаляти та шукати контакти.

## Встановлення

```bash
# Клонувати репозиторій
git clone <url>

# Перейти в папку проекту
cd goit-node-cli

# Встановити залежності
npm install
# або
pnpm install
```

## Використання

### Переглянути всі контакти
```bash
npm run getAll
```

### Знайти контакт за ID
```bash
npm run getById <ID>
```

**Приклад:**
```bash
npm run getById qdggE76Jtbfd9eWJHrssH
```

### Додати новий контакт
```bash
npm run addContact "<Ім'я>" -e "<Email>" -p "<Телефон>"
```

**Приклад:**
```bash
npm run addContact "Іван Петров" -e "ivan@example.com" -p "+380123456789"
```

### Видалити контакт за ID
```bash
npm run delById <ID>
```

**Приклад:**
```bash
npm run delById qdggE76Jtbfd9eWJHrssH
```

## Альтернативний спосіб (через node)

Також можна запускати команди напряму:

```bash
# Показати всі контакти
node src/index.js -a list

# Знайти контакт
node src/index.js -a get -i "qdggE76Jtbfd9eWJHrssH"

# Додати контакт
node src/index.js -a add -n "Іван" -e "ivan@test.com" -p "+380123456789"

# Видалити контакт
node src/index.js -a remove -i "qdggE76Jtbfd9eWJHrssH"
```

## Структура проекту

```
goit-node-cli/
├── src/
│   ├── contacts.js    # Функції для роботи з контактами
│   ├── index.js       # Головний файл з CLI командами
│   └── db/
│       └── contacts.json  # База даних контактів
├── package.json
└── README.md
```

## Технології

- Node.js
- ES6 Modules
- Commander.js (для CLI)
- nanoid (для генерації ID)
- File System API (для роботи з JSON файлом) 