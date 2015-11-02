var express = require('express');
var router = express.Router();
var path = require('path');
var calculate = require('../modules/calculate');

router.route('/data')
    .get(function(req, res){
        res.send("Hello");
    })
    .post(function(req, res){
        var solution = calculate(req.body);
        res.send({message: solution});
});


router.get('/*', function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;

