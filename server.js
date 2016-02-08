// CONFIG
var express = require('express');
var app = express();
var engines = require('consolidate');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// for serving static files in the 'client' directory (css, main page)
app.use(express.static('client'));

// configure smtp for contact form
var smtpTransport = nodemailer.createTransport(process.env.LOGIN);


// for rendering jade files located in client/views
app.set('views', __dirname + '/client/views/')
app.engine('html', engines.jade)
app.set('view engine', 'jade');

// ROUTES
app.get('/', function(req, res){
	res.render('main');
});

app.get('/kaleidoscope/:storyName', function(req,res){
  	console.log(req.params.storyName);
 	var storyName = req.params.storyName;
	var story = require('./client/views/blogposts/' + storyName + '.js');
	res.render('blog', { story: story });
});

// send email with data posted from contact form
app.post('/contactform', bodyParser.urlencoded({ extended: true }), function(req, res){
	
	var automatedMessage = 'This is an automated message from www.alexhannan.com. If you would like to respond to the sender, please write to the email listed below. Do NOT reply to this address.';
		
	var mailOptions = {
		from: req.body.author + '<' + req.body.email + '>',
		to: 'alexjhannan@gmail.com',
		subject: req.body.subject,
		text: automatedMessage + req.body.message + 'From: ' + req.body.author + 'Email:' + req.body.email,
		html: '<p><strong>' + automatedMessage + '</p></strong>' + '<br /><p>' + req.body.message + '<br /><br />From: ' + req.body.author + '<br />Email: ' + req.body.email +'</p>'
	}
	
	smtpTransport.sendMail(mailOptions, function(err, res){
		if (err) { console.log(err); }
		else { console.log('Message sent ');}
	});
	
	res.redirect('/');
	
});

var server = app.listen(process.env.PORT || 3000, function(){
	var port = server.address().port;
	console.log('Listening on port %s', port);
});
