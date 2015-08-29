var books = [{
  id:1,
  title: "Harry Potter",
  author:"J.K. Rowling"
},
{
  id:2,
  title: "Harry Potter 2",
  author:"J.K. Rowling"},
{
  id:3,
  title: "Insurgent",
  author:"BlablaBL"}];

module.exports = function(app) {
  var Book = app.models.Book;
  var controller = {};

  controller.getBooks = function (req,res) {
    res.json(books);
  }

  controller.getBook = function (req,res) {
    var id = req.params.id;
    for (var i in books){
      if (books[i].id == id){
        res.json(books[i]);
        return;
      }
    }
    res.status(404).json('Não encontrado');
  }

  return controller;
}
