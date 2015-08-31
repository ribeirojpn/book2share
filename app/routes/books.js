module.exports = function (app) {
  var controller = app.controllers.books;
  app.route('/books')
    .get(controller.getBooks)
    .post(controller.saveBook);

  app.route('/books/:id')
    .get(controller.getBook);
    // .delete(controller.removeBook);
}
