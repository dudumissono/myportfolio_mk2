/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

let passport = require('passport');

// helper function for guard purposes
function requiredAuth(req, res, next) {
    // check if user is logged in
    if (!req.isAuthenticated()){
        return res.redirect('../login');
    }
    next();
}

const indexController = require("../controllers/index.server.controller");
const aboutController = require("../controllers/about.server.controller");
const projectsController = require("../controllers/projects.server.controller");
const servicesController = require("../controllers/services.server.controller");
const contactController = require("../controllers/contact.server.controller");
const loginController = require("../controllers/login.server.controller");
const logoutController = require("../controllers/logout.server.controller");
const registerController = require("../controllers/register.server.controller");
const contactsListController = require("../controllers/contacts-list.server.controller");
const contactsAddController = require("../controllers/contacts-add.server.controller");
const contactsEditController = require("../controllers/contacts-edit.server.controller");
const contactsDeleteController = require("../controllers/contacts-delete.server.controller");

module.exports = function(app) {
    app.get('/', indexController.render);
    app.get('/about', aboutController.render);
    app.get('/projects', projectsController.render);
    app.get('/services', servicesController.render);
    app.get('/contact', contactController.render);
    app.post('/contact', contactController.redirect);
    app.get('/login', loginController.render);
    app.post('/login', loginController.processLoginPage);
    app.get('/register', registerController.render);
    app.post('/register', registerController.processRegisterPage);
    app.get('/logout', logoutController.performLogout);
    app.get('/contacts/list', requiredAuth, contactsListController.list);
    app.get('/contacts/add', requiredAuth, contactsAddController.render);
    app.post('/contacts/add', requiredAuth, contactsAddController.insert);
    app.get('/contacts/edit/:id', requiredAuth, contactsEditController.findById);
    app.post('/contacts/edit/:id', requiredAuth, contactsEditController.update);
    app.get('/contacts/delete/:id', requiredAuth, contactsDeleteController.delete);
}