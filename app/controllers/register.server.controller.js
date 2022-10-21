/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 20, 2022
 */

const mongoose = require('mongoose');
const passport = require('passport');

const User = require('../models/user.server.model');
// let User = userModel.User;

exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    // check if the user is already logged in
    if(!req.user){
        res.render('auth/register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ""
        })
    } else {
        return res.redirect('/');
    }
}

exports.processRegisterPage = function (req, res, next) {
    // instantiate new user
    let newUser = new User({
        username: req.body.username,
        // password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error: Inserting new user");
            console.log(err);
            if (err.name === "UserExistsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log("Error: User Already Exists!");
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ""
            });
        } else {
            // if no error exists, then registration is successful


            // redirect the user and authenticate them
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contacts/list');
            })
        }
    });
}