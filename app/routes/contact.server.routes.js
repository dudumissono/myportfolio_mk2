module.exports = function(app) {
    let contact = require('../controllers/contact.server.controller');
    app.get('/contact', contact.render);
}