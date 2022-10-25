/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 18, 2022
 */

const config = require('./env/development');
const mongoose = require('mongoose');

module.exports = function () {
    const db = mongoose.connect(config.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
        console.log('MongoDb Connection Successful');
    })
        .catch((error) => {
            console.log(error);
        })

    require('../app/models/contact.server.model');
    require('../app/models/user.server.model');
    return db;
}