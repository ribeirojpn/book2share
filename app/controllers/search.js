module.exports = function () {
  var controller = {};

  controller.searchBooks = function(req,res) {
    var search = req.query.q;
    var author = req.query.author||"";
    res.render('search',{'searchTxt': search, 'searchAuthor': author});
  }

  return controller;
}
