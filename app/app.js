var express = require("express");
var reload = require('reload');
var app = express();
var dataFile = require('../data/data.json');
const localport = 3000;

app.set('port', process.env.PORT || localport);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Roux Meetups 2";
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));


var server = app.listen(app.get('port'), function(){
    console.log("listening on port: " + app.get('port'));
});

reload(server, app);