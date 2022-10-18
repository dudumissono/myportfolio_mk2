/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configMongoose = require('./config/mongoose');
const configExpress = require('./config/express');

const db = configMongoose();
const app = configExpress();

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT);
app.post('/contact', (req, res) => {
    res.redirect('/');
});

console.log(`Server running at http://${HOST}:${PORT}`);

module.exports = app;