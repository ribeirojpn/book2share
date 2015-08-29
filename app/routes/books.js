module.exports = function (app) {
  var controller = app.controllers.books;
  app.route('/books')
    .get(controller.getBooks);

  app.route('/books/:id')
    .get(controller.getBook);
// .delete(controller.removeBook);
}
