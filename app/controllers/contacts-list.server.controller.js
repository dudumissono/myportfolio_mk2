/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 14, 2022
 */

const mongoose = require('../../config/mongoose');
const Contact = require('../models/contact.server.model');

exports.list = function (req, res, next) {
    Contact.find({}, (err, contacts) => {
        if (err) {
            return next(err);
        } else {
            res.render('contacts-list', {
                title: 'Business Contact List',
                contacts: contacts
            })
        }
    });
}
