/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 18, 2022
 */

const config = require('./env/development');
const mongoose = require('mongoose');

module.exports = function () {
    const db = mongoose.connect(config.db);
    require('../app/models/contact.server.model');

    return db;
}