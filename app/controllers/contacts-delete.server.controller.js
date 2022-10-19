/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 19, 2022
 */

const mongoose = require('../../config/mongoose');
const Contact = require('../models/contact.server.model');

exports.delete = function (req, res, next) {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err) {
            return next(err);
        } else {
            res.redirect('/contacts/list');
        }
    });
}