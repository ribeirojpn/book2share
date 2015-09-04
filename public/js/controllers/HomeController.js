angular.module('booktoshare').controller('HomeController', function ($scope,$resource) {
  var Book = $resource('/books-resume');
  $scope.books = [];

  Book.query(function (books) {
    $scope.books = books;
  }, function (erro) {
    console.log(erro);
  });

});
