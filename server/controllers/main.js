// home page controller
function indexCtrl(req, res){
	res.render('main');
}

// configure smtpTransport for emailer
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport(process.env.LOGIN);

// contact form post controller
function contactCtrl(req, res){
	
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
		else { console.log('Message sent '); }
	});

	res.redirect('/');
}

function resumeCtrl(req, res){
	res.render('resume');
}

module.exports.index = indexCtrl;
module.exports.contact = contactCtrl;
module.exports.resume = resumeCtrl;