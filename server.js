process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');
const app = express();

const HOST = 'localhost';
const PORT = 3000;

app.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}`)