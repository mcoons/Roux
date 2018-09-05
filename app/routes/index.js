
var express = require('express');
var router = express.Router();


router.get('/', function(request, response){
    var data = request.app.get('appData');
    var pagePhotos = [];

    data.speakers.forEach(element => {
        pagePhotos = pagePhotos.concat(element.artwork);
        
    });


    response.render('index', {
            pageTitle: 'Home',
            artwork: pagePhotos,
            pageID: 'home'
    });


});

module.exports = router;