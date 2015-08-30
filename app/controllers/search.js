module.exports = function () {
  var controller = {};

  var name = '';
  var photoUrl = '';


  controller.searchBooks = function(req,res) {
    var search = req.query.q;

    if(req.user){
      name = req.user.name;
      photoUrl = req.user.photo;
    }

    res.render('search',{
      'searchTxt': search,
      'usuarioLogado':name,
      'usuarioImg': photoUrl
    });
  }

  return controller;
}
