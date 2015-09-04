var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');

module.exports = function () {

  var User = mongoose.model('User');

  passport.use(new TwitterStrategy({
    consumerKey: 'bSMdRmJPlruspGzHy2v6gadbe',
    consumerSecret: 'FUXNvBZ6TollsUUYsrDGNPTAolyEVLw6YY3Ew3bSqgfTvJs0iH',
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
    profileFields: ['id','displayName','photos','username']
  }, function (token,tokenSecret, profile, done) {
    User.findOrCreate(
      {'login':profile.username},
      {'name':profile.displayName,
       'photo': profile.photos[0].value},
      function (erro,user) {
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null,user);

       }
    )
  }));

  passport.use(new FacebookStrategy({
    clientID: '1026586744032934',
    clientSecret: '51c5dc852108a92425c1f1983d7d5d5b',
    // callbackURL: "http://127.0.0.1:3000/auth/facebook/callback",
    callbackURL: "https://book2share.herokuapp.com/auth/facebook/callback",
    profileFields: ['id','displayName','photos','emails']
  }, function (accessToken, refreshToken, profile, done) {
    User.findOrCreate(
      {'login':profile.emails[0].value},
      {'name':profile.displayName,
       'photo': profile.photos[0].value},
      function (erro,user) {
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null,user);

       }
    )
  }));

  passport.use(new GoogleStrategy({
    clientID: '192440724904-4ea01dmm26kglbsa6p6njm4mbmrlrppq.apps.googleusercontent.com',
    clientSecret: '1z0XYhqoIABVRp7zzYZw-Cz-',
    // callbackURL: "http://127.0.0.1:3000/auth/google/callback",
    callbackURL: "https://book2share.herokuapp.com/auth/google/callback",
    profileFields: ['id','displayName','photos','emails']
  },function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(
      {'login': profile.emails[0].value},
      {'name': profile.displayName,
      'photo': profile.photos[0].value},
      function (erro, user) {
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null,user);
      }
    )
  }));

  passport.serializeUser(function (user,done) {
    done(null,user._id);
  });

  passport.deserializeUser(function (id,done) {
    User.findById(id).exec().then(function (user) {
      done(null,user);
    });
  });
}
