var express = require('express');
var app = express();

// CONFIG
app.use(express.static('client'));

// ROUTES
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

var server = app.listen(process.env.PORT || 3000,, function(){
	var port = server.address().port;
	console.log('Listening on port %s', port);
});
