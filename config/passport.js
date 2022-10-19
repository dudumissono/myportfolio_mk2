/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 19, 2022
 */

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');
const localStrategy = passportLocal.Strategy;
const flash = require('connect-flash');