module.exports = function (app) {
  var controller = app.controllers.request;
  function checkAuth(req,res,next) {
		if (req.isAuthenticated()){
			return next();
		} else {
			res.status('401').json('Não autorizado');
		}
	}

  app.route('/request')
    .get(checkAuth,controller.getRequests)
    .post(checkAuth,controller.addRequest);

  app.route('/user/request')
    .get(checkAuth,controller.getUserRequests);

  app.route('/my/request')
    .get(checkAuth,controller.getMyRequests);

  app.route('/request/:id')
    .get(checkAuth,controller.getRequest)
    .delete(checkAuth,controller.deleteRequest)
    .post(checkAuth,controller.updateRequest);

}