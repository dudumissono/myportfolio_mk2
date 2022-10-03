module.exports = function(app) {
    let services = require('../controllers/services.server.controller');
    app.get('/services', services.render);
}