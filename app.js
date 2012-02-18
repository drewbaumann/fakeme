
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
  
var everyauth = require('everyauth');

everyauth.twitter
  .consumerKey('7019FHUuGprqI4B7kXy05w')
  .consumerSecret('OawGl6iOuWuCUtSDVJ0hmN6BM1XEtXY0HO9IeqHFM')
  .findOrCreateUser( function (session, accessToken, accessTokenSecret, twitterUserMetadata) {
    // find or create user logic goes here
  })
  .redirectPath('/');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser())
  app.use(express.session({secret: 'chocolote rain'}))
  app.use(everyauth.middleware());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
everyauth.helpExpress(app);


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
