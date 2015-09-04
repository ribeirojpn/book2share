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
    });
  };

  controller.getBook = function (req,res) {
    var id = req.params.id;
    Book.findById(id).populate('owner').exec().then(
      function (book) {
        if (!book){
          throw new Error('Book não encontrado');
        }
        res.json(book);
    }, function (erro) {
      res.status(404).json('Não encontrado');
    });
  };

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
  };

  controller.getResumedBookList = function (req,res) {
    Book.find({},null,{limit:14}).exec().then(
      function (books) {
        res.json(books);
      },function (erro) {
        console.log(erro);
        res.status(404).json('Não encontrado');
      }
    );
  };

  controller.getUserBooks = function (req,res) {
    var userId = req.user._id;
    Book.find({owner: userId}).exec().then(
      function (books) {
        res.json(books);
      }, function (erro) {
        console.log(erro);
        res.status(404).json('Não encontrado');
      }
    );
  };

  controller.updateBook = function(req,res) {
    Book.findByIdAndUpdate(req.params.id,{
        owner: req.body.owner
      }, function(request) {
        res.status(201).json(request);
      },function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.removeBook = function(req,res) {
    Book.findByIdAndRemove(req.params.id).exec().then(
      function() {
        res.status(204).end();
      }, function(erro) {
        res.status(500).json(erro);
      }
    );
  }

  return controller;
}
