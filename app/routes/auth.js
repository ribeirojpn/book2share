var passport = require('passport');

module.exports = function(app) {
  app.get('/auth/twitter', passport.authenticate('twitter',{scope: 'photo'}));
  app.get('/auth/twitter/callback',passport.authenticate('twitter',{
    successRedirect: '/',
    failureRedirect: '/#/login'
  }));

  app.get('/logout', function (req,res) {
    req.logOut();
    res.redirect('/');
  });
}
