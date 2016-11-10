var router = require('express').Router();

var weatherController = require('./weatherController')

router.get ('/forecast', weatherController)

module.exports = router;