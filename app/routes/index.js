module.exports = function(app){
  app.route('/')
    .get(function (req,res) {
      res.render('index',{"usuarioLogado":"Joao Paulo Ribeiro","usuarioImg": 'images/user.jpg'});
    });
}
