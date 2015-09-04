angular.module('booktoshare').controller('BookListController',function ($scope,$resource) {
  var Books = $resource('/books');

  Books.query(function (books) {
    $scope.books = books;
  },function (erro) {
    console.log(erro);
  });
});
