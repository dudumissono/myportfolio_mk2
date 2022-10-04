/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

const config = require('./env/development');
const session = require('express-session');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = function () {
    let app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        compress();
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.set('views', './app/views/')
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));

    require('../app/routes')(app);
    return app;
}