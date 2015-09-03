module.exports = function(app){
  app.route('/')
    .get(function (req,res) {
      var name = '';
		  var photoUrl = '';
		  if(req.user){
        userLogin = req.user.login;
        name = req.user.name;
			  photoUrl = req.user.photo;
		  }

      res.render('index',{
        "usuarioLogado":name,
        "usuarioImg": photoUrl
      });
    });
}
