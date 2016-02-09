var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mainCtrl = require('../controllers/main');

router.get('/', mainCtrl.index);

router.post('/contactform', bodyParser.urlencoded({ extended: true }), mainCtrl.contact);

module.exports = router;