module.exports = function(app) {
  var Book = app.models.Book;
  var controller = {};

  controller.getBooks = function (req,res) {
    Book.find().exec().then(
      function (books) {
        res.json(books);
    },function (erro) {
        console.error(erro);
        res.status(500).json(erro);
    })
  }

  controller.getBook = function (req,res) {
    var id = req.params.id;
    Book.findById(id).exec().then(
      function (book) {
        if (!book){
          throw new Error('Book não encontrado');
        }
        res.json(book);
    }, function (erro) {
      res.status(404).json('Não encontrado');
    });

  }

  controller.saveBook = function (req,res) {
    Book.create(req.body).then(
      function (book) {
        res.status(201).json(book);
      },
      function(erro){
        res.status(500).json(erro);
      }
    );
  }

  return controller;
}
