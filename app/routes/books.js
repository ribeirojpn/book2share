module.exports = function (app) {
  var controller = app.controllers.books;

  function checkAuth(req,res,next) {
		if (req.isAuthenticated()){
			return next();
		} else {
			res.status('401').json('Não autorizado');
		}
	}

  app.route('/books')
    .get(controller.getBooks)
    .post(checkAuth,controller.saveBook);

  app.route('/books/:id')
    .get(controller.getBook)
    .post(checkAuth,controller.updateBook);
    // .delete(controller.removeBook);

  app.route('/user-books')
    .get(controller.getUserBooks);

  app.route('/books-resume')
    .get(controller.getResumedBookList);
}
