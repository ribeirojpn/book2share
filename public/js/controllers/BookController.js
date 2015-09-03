angular.module('booktoshare').controller('BookController', function($scope,$resource,$routeParams) {
  var Book = $resource('/books/:id');

  Book.get({id: $routeParams.id}, function(book) {
    $scope.book = book;
  }, function (erro) {
    $scope.mensagem = {
      texto: 'Could not find the poll.'
    };
    console.log(erro);
  });

})
