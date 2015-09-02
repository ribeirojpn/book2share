module.exports = function (app) {
  var controller = app.controllers.config;

  function checkAuth(req,res,next) {
		if (req.isAuthenticated()){
			return next();
		} else {
			res.status('401').json('Não autorizado');
		}
	}

  app.route('/config')
    .get(checkAuth,controller.getUser)
    .post(checkAuth,controller.updateUser);
}
