# Тестування працездатності системи

Для тестування використовувалася програма [Postman](https://www.postman.com/).

### Запуск cервера

Для запуску сервера необхідно перейти до директорії `/src/js/`:

```bash
cd ./src/js/
```

Та виконати 

```bash
node app.js
```
### Отримання списку всіх артефактів 

`GET` `/api/artifacts/`

![GET /api/artifacts](https://i.imgur.com/8mmgM59.jpg)

### Отримання артефактів за id

`GET` `/api/artifacts/:id`

![GET /api/artifacts](https://i.imgur.com/ZdoayP1.jpg)

![GET /api/artifacts](https://i.imgur.com/XOH0vqX.jpg)

У випадку, якщо артефакта з таким id не існує, сервер поверне помилку:

![GET /api/artifacts](https://i.imgur.com/CjAgBd9.jpg)

### Створення артефакта

`POST` `/api/artifacts`

Повертає повідомлення про створення артефакта 

![POST /api/artifacts](https://i.imgur.com/ZAW7Kuj.jpg)
![POST /api/artifacts](https://i.imgur.com/xorj9QE.jpg)

Якщо буде відсутній параметр то видасть помилку

![POST /api/artifacts](https://i.imgur.com/sp1P6fr.jpg)

### Оновлення артефакта 

`PUT` `/api/artifacts/:id`

Повертає повідомлення про оновлення артефакта 

![PUT /api/artifacts](https://i.imgur.com/rJS3Srb.jpg)

У випадку, якщо артефакта з таким id не існує, повертається помилка

![PUT /api/artifacts](https://i.imgur.com/Ihpwtsp.jpg)

У випадку, якщо недостатньо параметрів, повертається помилка

![PUT /api/artifacts](https://i.imgur.com/ozXycYM.jpg)

### Видалення артефакта
`DELETE` `/api/artifacts/:id`

Повертає повідомлення про видалення артефакта

![DELETE /api/artifacts](https://i.imgur.com/Vij0Q1F.jpg)

У випадку, якщо артефакта з таким id не існує, повертається помилка:  

![DELETE /api/artifacts](https://i.imgur.com/3LHmfIj.jpg)
