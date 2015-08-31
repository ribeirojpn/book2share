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
    var newBook = req.body;
    newBook.owner = req.user._id;
    Book.create(newBook).then(
      function (book) {
        res.status(201).json(book);
      },
      function(erro){
        res.status(500).json(erro);
      }
    );
  }

  controller.getResumedBookList = function (req,res) {
    console.log('get resume');
    Book.find({},null,{limit:14}).exec().then(
      function (books) {
        res.json(books);
      },function (erro) {
        console.log(erro);
        res.status(404).json('Não encontrado');
      }
    );
  }

  return controller;
}
