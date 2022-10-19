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
const contactsList = require("../controllers/contacts-list.server.controller");
const update = require("../controllers/update.server.controller");
const contactsAdd = require("../controllers/contacts-add.server.controller");
const contactsEdit = require("../controllers/contacts-edit.server.controller");
const contactsDelete = require("../controllers/contacts-delete.server.controller")

module.exports = function(app) {
    app.get('/', index.render);
    app.get('/about', about.render);
    app.get('/projects', projects.render);
    app.get('/services', services.render);
    app.get('/contact', contact.render);
    app.post('/contact', contact.redirect);
    app.get('/login', login.render);
    app.get('/contacts/list', contactsList.list);
    app.get('/contacts/add', contactsAdd.render);
    app.post('/contacts/add', contactsAdd.insert);
    app.get('/contacts/edit/:id', contactsEdit.findById);
    // app.post('/contacts/edit/:id', contactsEdit.update);
    app.get('/contacts/delete/:id', contactsDelete.delete);
    app.get('/update', update.render);
}