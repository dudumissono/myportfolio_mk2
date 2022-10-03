module.exports = function(app) {
    let projects = require('../controllers/projects.server.controller');
    app.get('/projects', projects.render);
}