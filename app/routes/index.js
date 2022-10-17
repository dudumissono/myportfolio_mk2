/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

const index = require("../controllers/index.server.controller");
const about = require("../controllers/about.server.controller");
const projects = require("../controllers/projects.server.controller");
const services = require("../controllers/services.server.controller");
const contact = require("../controllers/contact.server.controller");
const login = require("../controllers/login.server.controller");
const businessContactsList = require("../controllers/businessContatcsList.server.controller");
const update = require("../controllers/update.server.controller");

module.exports = function(app) {
    app.get('/', index.render);
    app.get('/about', about.render);
    app.get('/projects', projects.render);
    app.get('/services', services.render);
    app.get('/contact', contact.render);
    app.get('/login', login.render);
    app.get('/businessContactsList', businessContactsList.render);
    app.get('/update', update.render);
}