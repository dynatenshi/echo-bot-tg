# Telegram эхо-бот на Node.js

Данный проект представляет из себя бота, возвращающего JSON-ответ с серверов Telegram на сообщение пользователя.

## Технологии
<ul>
    <li>JavaScript</li>
    <li>Node.js 22</li>
    <li>NPM</li>
    <li>telegraf 4.16.3</li>
    <li>dotenv 17.2.4</li>
</ul>

## Использование
<ol>
    <li>Добавить токен бота в .env</li>
    <li>Установить зависимости командой <code>npm install</code></li>
    <li>Запустить проект командой <code>node index.js</code></li>
    <li>Написать сообщение боту</li>
</ol>

В ответ на сообщение бот отправит ответ в формате:
```json
{
  "update_id": 999999999,
  "message": {
    "message_id": 9,
    "from": {
      "id": 999999999,
      "is_bot": false,
      "first_name": "fname",
      "last_name": "lname",
      "username": "uname",
      "language_code": "ru"
    },
    "chat": {
      "id": 999999999,
      "first_name": "fname",
      "last_name": "lname",
      "username": "uname",
      "type": "private"
    },
    "date": 999999999,
    "text": "Hi there"
  }
}
```