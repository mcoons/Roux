var express = require('express');
var router = express.Router();
// var dataFile = require('../../data/data.json');


router.get('/speakers', function(request, response){
    var info = "";
    var dataFile = request.app.get('appData');

    dataFile.speakers.forEach(element => {
        info+= `
            <li>
                <h2>${element.name}</h2>
                <img src="/images/speakers/${element.shortname}_tn.jpg" alt="speaker" style="height: 300px;">
                <p>${element.summary}</p>
            </li>  
        `});
    response.send(`
        <link rel="stylesheet" type ="text/css" href="/css/style.css">
        <h1>Reux Academy Meetups</h1>
        ${info}
    `);
});

router.get('/speakers/:speakerid', function(request, response){
    
    var dataFile = request.app.get('appData');
    var speaker = dataFile.speakers[request.params.speakerid];

    response.send(`
        <link rel="stylesheet" type ="text/css" href="../css/style.css">
        <h1>${speaker.title}</h1>
        <h2>${speaker.name}</h2>
        <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker" style="height: 300px;">

        <p>${speaker.summary}</p>
    `);
});

module.exports = router;
