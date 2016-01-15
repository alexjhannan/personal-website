// CONFIG
var express = require('express');
var app = express();
var engines = require('consolidate');

// for serving static files in the 'client' directory (css, main page)
app.use(express.static('client'));

// for rendering files located in client/views (blog posts)
app.set('views', __dirname + '/client/views/')
app.engine('html', engines.jade)
app.set('view engine', 'jade');

// ROUTES
app.get('/', function(req, res){
	res.render('main');
});

app.get('/kaleidoscope', function(req,res){
 	var story = {};
	story.title = 'Story Title';
	story.hook = 'Story Hook';
	story.body = 'The body text of the story I\'m about to write.';
	res.render('blog', { story: story });
});

app.get('/kaleidoscope/:storyName', function(req,res){
  	console.log(req.params.storyName);
 	var storyName = req.params.storyName;
	var story = require('./client/views/blogposts/' + storyName + '.js');
	res.render('blog', { story: story });
});

var server = app.listen(process.env.PORT || 3000, function(){
	var port = server.address().port;
	console.log('Listening on port %s', port);
});
