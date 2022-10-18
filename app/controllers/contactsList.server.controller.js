/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 14, 2022
 */

const mongoose = require('../../config/mongoose');
const User = require('../models/contact.server.model');

exports.create = function (req, res, next) {

}

exports.list = function (req, res, next) {
    User.find({}, (err, contacts) => {
        if (err) {
            return next(err);
        } else {
            let test = res.status(200).json(contacts)
            // res.render('contactsList', {
            //     title: 'Business Contact List',
            //     description: ''
            // })
        }
    })
}

exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('contactsList', {
        title: 'Business Contact List',
        description: 'BUSINESS CONTACTS'
    })
}