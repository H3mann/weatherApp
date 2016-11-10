
var router = require('express').Router();
var request = require('request');


router.get('/forecast',function (req,res)  {
	console.log('inside router.get!!*', req.query)

var reqURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + req.query.location + '=modexml&appid=30a9ac94b6b88e7c235d48f8e19ded50';
console.log('reqURl----->', reqURL)

	var options = { method: 'GET', uri: reqURL};
	
	request(options, (error, response, body) => {
	    if (error) throw new Error(error);
	    res.send(body);
	});

})

module.exports = router;


// Description:

// You can search 16 day weather forecast with daily average parameters by city name. All weather data can be obtained in JSON, XML or HTML format.
// API call:

// api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={cnt}
// Parameters:

// q city name and country code divided by comma, use ISO 3166 country codes

// cnt number of days returned (from 1 to 16)
