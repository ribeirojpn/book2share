module.exports = function (app) {
  var controller = app.controllers.search;

  app.route('/search?')
    .get(controller.searchBooks);
}
