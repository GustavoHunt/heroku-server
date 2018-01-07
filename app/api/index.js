var db = require('../../config/database');
var api = {}

api.registerAttempt = function(req, res) {
    var request = req.body;
    delete request._id;
    db.insert(request, function(err, newDoc) {
        if(err) return console.log(err);
        var winnerNumber = 6;
        if (request.number == winnerNumber) {
            res.status(200).json(newDoc._id);
        } else {
            res.status(400).json(newDoc._id);
        }
    });  
};
module.exports = api;