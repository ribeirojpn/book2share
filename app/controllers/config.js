module.exports = function (app) {
  var controller = {};
  var User = app.models.User;

  controller.getUser = function (req,res) {
    var user = req.user;
    if (user){
      res.json(user);
    } else {
      res.status(404).json('Não encontrado');
    }
  }

  controller.updateUser = function (req,res) {
    var id = req.body._id;
    User.findByIdAndUpdate(id,req.body,function (user) {
      res.status(201).json(user);
    }, function (erro) {
      res.status(500).json(erro);
    });
  }

  return controller;
}
