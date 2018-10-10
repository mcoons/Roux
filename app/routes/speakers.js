var express = require('express');
var router = express.Router();
// var dataFile = require('../../data/data.json');


router.get('/speakers', function(request, response){
    var data = request.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(element => {
        pagePhotos = pagePhotos.concat(element.artwork);
        
    });


    response.render('speakers', {
            pageTitle: 'Speakers',
            artwork: pagePhotos,
            speakers: pageSpeakers,
            pageID: 'speakerList'
    });
});

router.get('/speakers/:speakerid', function(request, response){
        var data = request.app.get('appData');
        var pagePhotos = [];
        var pageSpeakers = [];
    
        data.speakers.forEach(element => {
            if (element.shortname == request.params.speakerid){
                pageSpeakers.push(element);
                pagePhotos = pagePhotos.concat(element.artwork);
            }
            
        });
    
    
        response.render('speakers', {
                pageTitle: 'Speaker Info',
                artwork: pagePhotos,
                speakers: pageSpeakers,
                pageID: 'speakerDetail'
        });
    });


module.exports = router;
