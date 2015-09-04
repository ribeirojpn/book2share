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
    .get(controller.getRequests)
    .post(controller.addRequest);

  app.route('/user/request')
    .get(checkAuth,controller.getUserRequests)
    .post(checkAuth,controller.updateRequest);

  app.route('/my/request')
    .get(checkAuth,controller.getMyRequests);

  app.route('/request/:id')
    .get(checkAuth,controller.getRequest)
    .delete(checkAuth,controller.deleteRequest)
    .post(checkAuth,controller.updateRequest);

}
