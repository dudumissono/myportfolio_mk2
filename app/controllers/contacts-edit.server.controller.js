/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 19, 2022
 */

const mongoose = require('../../config/mongoose');
const Contact = require('../models/contact.server.model');

exports.findById = function (req, res, next) {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            return next(err);
        } else {
            res.render('contacts/edit', {
                title: 'Edit Contact',
                contact: contactToEdit
            })
        }
    });
}

exports.update = function (req, res, next) {
    let id = req.params.id;

    const contactUpdated = new Contact({
        _id: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    Contact.updateOne({_id: id}, contactUpdated,(err) =>{
        if (err) {
            return next(err);
        } else {
            res.redirect('/contacts/list');
        }
    });
}