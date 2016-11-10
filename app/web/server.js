var path = require('path');
var bodyParser = require('body-parser');
var cors = require("cors");
var express = require('express');
var webpack = require('webpack');
 var config = require('../../webpack.config');
// var router = require('./router')
var router = require('express').Router();
var request = require('request');

var app = express();



var compiler = webpack(config);
app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(cors());
app.use(bodyParser.json());

// app.use("/api",router);

 // app.get("/DetailedWeather/*", function(req, res) {

	// console.log('insideApp.get');
	

	// })

app.get('/forecast',function (req,res)  {
	console.log('inside router.get!!*', req.query)

	
	// var reqURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + req.query.location + '=modexml&appid=30a9ac94b6b88e7c235d48f8e19ded50';

var reqURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + req.query.location + '&type=accurate&APPID=30a9ac94b6b88e7c235d48f8e19ded50&cnt=5'


	console.log('reqURl----->', reqURL)

	var options = { method: 'GET', uri: reqURL};
	
	request(options, (error, response, body) => {
	    if (error) throw new Error(error);
	    res.send(body);
	    console.log('body',body)
	});

})

app.use("*", express.static(__dirname + "/../client/"))

app.listen(8000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8000');
});