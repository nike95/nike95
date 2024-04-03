const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Парсинг данных формы
app.use(bodyParser.urlencoded({ extended: true }));

// Обработка POST запроса на сохранение данных
app.post('/submit', (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    const data = `${firstName}\t${lastName}\t${phone}\t${email}\n`;

    // Запись данных в файл
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Произошла ошибка при сохранении данных.');
        } else {
            console.log('Данные успешно сохранены.');
            res.status(200).send('Данные успешно сохранены.');
        }
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
