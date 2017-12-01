# BeeJee

#### API

[test-task-backend](https://uxcandy.com/~shapoval/test-task-backend/docs.html)

#### Настройка

1. Клонируем репозиторий. git clone https://github.com/andryushkov-ky/BeeJee.git

2. Переходим в корень проекта. **cd BeeJee**

3. Устанавливаем зависимости. **npm install**

4. Запускаем сервер. **npm run local**

5. Приложение доступно на localhost:3002

#### Авторизация для редактирвоания тасков
login: admin <br><br>
password: 123


#### Внимание
Из-за ошибки **No 'Access-Control-Allow-Origin' header is present on the requested resource.** <br>
Используется мок данных. Чтобы его поменять на реальный запрос, в файле **\BeeJee\public\js\api\index.js** закоментируем ложный метод **fetchTasks** и раскоментируем метод с реальным запросом
<br>
Также не работает **редактирование задачи** нужно разобраться с **signature**