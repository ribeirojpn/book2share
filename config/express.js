var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function() {
  var app = express();
  app.set('port', process.env.PORT || 3000);
  app.use(express.static('./public'));
  app.set('view engine','ejs');
  app.set('views','./app/views');

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(cookieParser());
  app.use(session({
    secret: 'not again',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  load('models', {cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  app.get('*', function(req,res){
    res.status(404).render('404');
  });

  return app;
}
