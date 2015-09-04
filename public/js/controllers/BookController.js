angular.module('booktoshare').controller('BookController', function($scope,$resource,$routeParams) {
  var Book = $resource('/books/:id');
  var User = $resource('/config');
  var Request = $resource('/request');
  $scope.mensagem = {};
  $scope.book = {};
  var userRequester;
  $scope.userLoged = false;

  function getBook() {
    Book.get({id: $routeParams.id}, function(book) {
      $scope.book = book;
    }, function (erro) {
      $scope.mensagem.erro = 'Could not find the book.';
      console.log(erro);
    });
  }
  getBook();

  function getUser() {
      User.get(function (user) {
        userRequester = user;
        $scope.userLoged = true;
      },function (erro) {
        console.log(erro)
        userRequester = false;
      });
  }
  getUser();

  $scope.checkUser = function() {
    return($scope.book.owner._id == userRequester._id);
  };

  $scope.request = function() {
    if ($scope.book.owner._id == userRequester._id){
      return;
    } else {
      var request = new Request();

      request.bookId = $scope.book._id;
      request.ownerId = $scope.book.owner._id;
      request.requesterId = userRequester._id;

      request.$save().then(
        function () {
          $scope.mensagem.request = 'Book requested.';
        })
        .catch(function (erro) {
          console.log('request failed');
          console.log(erro);
        }
      );
    }
  };

  $scope.removeBook = function() {
    Book.remove({id: $scope.book._id},
      function () {
        $scope.mensagem.delete = 'Book removed.';
      },function (erro) {
        $scope.mensagem.erro = 'Erro, try again.';
        console.log(erro);
      }
    );
  };
});
