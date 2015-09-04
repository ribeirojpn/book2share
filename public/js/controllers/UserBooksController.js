angular.module('booktoshare').controller('UserBooksController',function ($scope,$resource) {
  var Books = $resource('/user-books');
  var UserRequest = $resource('/user/request');
  var MyRequest = $resource('/my/request');
  $scope.presentation = 'mybooks';

  Books.query(function (books) {
    $scope.books = books;
  },function (erro) {
    console.log(erro);
  });

  UserRequest.query(function (requests) {
    $scope.requests = [];
    $scope.inactiveRequests = [];
    $scope.activedRequests = 0;
    console.log(requests);

    for (var i = 0; i < requests.length; i++){
      if (requests[i].active){
        $scope.requests.push(requests[i]);
        $scope.activedRequests += 1;
      } else {
        $scope.inactiveRequests.push(requests[i]);
      }
    }
  },function (erro) {
    console.log(erro);
  });

  MyRequest.query(function (requests) {
    $scope.myrequests = [];
    $scope.respondedMyRequests = [];
    $scope.respondedRequests = 0;

    for (var i = 0; i < requests.length; i++){
      if (!requests[i].active){
        $scope.respondedRequests += 1;
        $scope.respondedMyRequests.push(requests[i]);
      } else {
        $scope.myrequests.push(requests[i]);
      }
    }
  },function (erro) {
    console.log(erro);
  });



  $scope.setPresentation = function(presentation) {
    $scope.presentation = presentation;
  }

  $scope.checkPresentation = function(string) {
    return $scope.presentation == string;
  }
});
