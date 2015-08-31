angular.module('booktoshare').controller('AddBookController', function ($scope,$resource) {
  var Book = $resource('/books/:id');
  $scope.book = new Book();
  $scope.mensagem = {
    success:'',
    erro:''
  };

  $scope.save = function () {
    $scope.book.$save()
      .then(function () {
        $scope.mensagem.success = 'Book added to your collection';
        $scope.mensagem.erro = '';
        $scope.book = new Book();
      })
      .catch(function (erro) {
        console.log(erro);
        if (erro.statusText === "Unauthorized") {
          $scope.mensagem.erro = 'Could not add the book: Unauthorized. You must be logged!';
        } else {
          $scope.mensagem.erro = 'Could not add the book. Check if is all right';
        }
        $scope.mensagem.success = '';
      });
  }

});
