var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/guess/register')
        .post(api.registerAttempt)
       
    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};