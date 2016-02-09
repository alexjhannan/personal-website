// CONFIG
var express = require('express');
var app = express();
var engines = require('consolidate');
var routes = require('./server/routes/index');

// for serving static files in the 'client' directory (css, main page)
app.use(express.static('client'));

// for rendering jade files located in server/views
app.set('views', __dirname + '/server/views/')
app.engine('html', engines.jade)
app.set('view engine', 'jade');

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler. will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// live error handler, no stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
 	});
 });

var server = app.listen(process.env.PORT || 3000, function(){
	var port = server.address().port;
	console.log('Listening on port %s', port);
});
