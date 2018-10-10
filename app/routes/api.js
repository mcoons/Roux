var express = require('express');
var router = express.Router();
var feedbackData = require('../../data/feedback.json')

router.get('/api', function(request, response){


    response.json(feedbackData)

});

module.exports = router;