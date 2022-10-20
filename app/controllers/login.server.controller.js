/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 14, 2022
 */

const mongoose = require('mongoose');
const passport = require('passport');

const userModel = require('../models/user.server.model');
let User = userModel.User;

exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    // check if the user is already logged in
    if(!req.user){
        res.render('auth/login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ""
        })
    } else {
        return res.redirect('/contacts/list');
    }
}

exports.processingLoginPage = function (req, res, next) {
    passport.authenticate('local',(err, user, info) => {
        // user error?
        if (err) {
            return next(err);
        }

        // is there a user login error?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) {
                return next(err)
            }
            return res.redirect('/contacts/list');
        });
    })(req, res, next);
}