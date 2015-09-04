angular.module('booktoshare').controller('UserBooksController',function ($scope,$resource) {
  var Books = $resource('/user-books');
  var UserRequest = $resource('/user/request');
  var MyRequest = $resource('/my/request');

  Books.query(function (books) {
    $scope.books = books;
  },function (erro) {
    console.log(erro);
  });

  UserRequest.query(function (requests) {
    $scope.requests = requests;
    $scope.activedRequests = 0;
    
    for (var i = 0; i < requests.length; i++){
      if (requests[i].active){
        $scope.activedRequests += 1;
      }
    }
  },function (erro) {
    console.log(erro);
  });

  MyRequest.query(function (requests) {
    $scope.requests = requests;
    $scope.respondedRequests = 0;

    for (var i = 0; i < requests.length; i++){
      if (!requests[i].active){
        $scope.respondedRequests += 1;
      }
    }
  },function (erro) {
    console.log(erro);
  });

});
