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

const passport = require('passport');
const passportLocal = require('passport-local');
const localStrategy = passportLocal.Strategy;
const flash = require('connect-flash');

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

    // set up express session
    app.use(session({
        saveUninitialized: false,
        resave: false,
        secret: config.sessionSecret
    }));

    // initialize flash
    app.use(flash());

    // initialize passport
    app.use(passport.initialize());
    app.use(passport.session());

    // passport user configuration

    // create a user model instance
    let userModel = require('../app/models/user.server.model');
    let User = userModel.User;

    // serialize and deserialize the user info
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // implement a User Authentication Strategy
    passport.use(User.createStrategy());

    // view engine setup
    app.set('views', './app/views/')
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));

    require('../app/routes')(app);
    return app;
}