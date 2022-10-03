module.exports = function(app) {
    let about = require('../controllers/about.server.controller');
    app.get('/about', about.render);
}