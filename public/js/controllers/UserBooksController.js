angular.module('booktoshare').controller('UserBooksController',function ($scope,$resource) {
  var Books = $resource('/user-books');

  Books.query(function (books) {
    $scope.books = books;
    console.log(books);
  },function (erro) {
    console.log(erro);
  });
});
