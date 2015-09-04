angular.module('booktoshare').controller('BookController', function($scope,$resource,$routeParams) {
  var Book = $resource('/books/:id');
  var User = $resource('/config');
  var Request = $resource('/request');

  var userRequester;

  Book.get({id: $routeParams.id}, function(book) {
    $scope.book = book;
  }, function (erro) {
    $scope.mensagem = {
      texto: 'Could not find the poll.'
    };
    console.log(erro);
  });

  User.get(function (user) {
    userRequester = user;
    console.log(userRequester);
  },function (erro) {
    console.log(erro)
  });

  $scope.request = function() {
    var request = new Request();
    request.bookId = $scope.book._id;
    request.ownerId = $scope.book.owner;
    request.requesterId = userRequester._id;

    request.$save().then(
      function () {
        console.log('request maded');
      })
      .catch(function (erro) {
        console.log('request failed');
        console.log(erro);
      }
    );

    console.log(request);
  };

})
