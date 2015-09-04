module.exports = function (app) {
  var controller = {};
  var Book = app.models.Book;
  var name = '';
  var photoUrl = '';


  controller.searchBooks = function(req,res) {
    var search = req.query.q;
    var regex = new RegExp(search,'i');
    if(req.user){
      name = req.user.name;
      photoUrl = req.user.photo;
    }

    Book.find({title: regex},function (err, books) {
      if (books){
        res.render('search',{
          'searchTxt': search,
          'usuarioLogado':name,
          'usuarioImg': photoUrl,
          'books':books
        });
        console.log(books);
      } else if(err){
        console.log(err);
      }
    });
  };

  return controller;
}
