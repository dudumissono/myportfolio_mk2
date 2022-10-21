/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 18, 2022
 */

const mongoose = require('../../config/mongoose');
const Contact = require('../models/contact.server.model');

exports.render = function (req, res, next) {
    res.render('contacts/add', {
        title: 'Add Contact',
        displayName: req.user ? req.user.displayName : ""
    })
}

exports.insert = function (req, res, next) {
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    contact.save((err) => {
       if (err) {
           return next(err);
       } else {
           console.log(`contact saved`);
           res.redirect('/contacts/list');
       }
    });
}