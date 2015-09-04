module.exports = function (app) {
  var Request = app.models.Request;
  var controller = {};

  controller.getRequests = function(req,res) {
    Request.find().exec().then(
      function(requests) {
        res.json(requests);
      },function(erro) {
        console.log(erro);
        res.status(500).json(erro);
      }
    );
  };

  controller.addRequest = function(req,res) {
    Request.create(req.body).then(
      function(request) {
        res.status(201).json(request);
      },function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.getUserRequests = function(req,res) {
    Request.find({ownerId: req.user._id})
    .populate('bookId')
    .populate('ownerId')
    .populate('requesterId').exec().then(
      function(requests) {
        res.json(requests);
      },function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.getMyRequests = function(req,res) {
    Request.find({requesterId: req.user._id})
    .populate('bookId')
    .populate('ownerId')
    .populate('requesterId').exec().then(
      function(requests) {
        res.json(requests);
      },function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.getRequest = function(req,res) {
    Request.findById(req.params.id).exec().then(
      function(request) {
        res.json(request);
      },function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.deleteRequest = function(req,res) {
    Request.findByIdAndRemove(req.params.id).exec().then(
      function() {
        res.status(204).end();
      }, function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.updateRequest = function(req,res) {
    Request.findByIdAndUpdate(req.params.id,{
        approved: req.body.approved,
        active: false
      }, function(request) {
        res.status(201).json(request);
      },function(erro) {
        res.status(500).json(erro);
      }
    );
  }

  return controller;
};
