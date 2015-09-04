angular.module('booktoshare').controller('UserBooksController',function ($scope,$resource,$http) {
  var Books = $resource('/user-books');
  var UserRequest = $resource('/user/request');
  var MyRequest = $resource('/my/request');
  $scope.presentation = 'mybooks';

  function getBooks() {
    Books.query(function (books) {
      $scope.books = books;
    },function (erro) {
      console.log(erro);
    });
  };

  function getUserRequests() {
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
  };

  function getMyRequests() {
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
  }

  getBooks();
  getUserRequests();
  getMyRequests();

  $scope.trade = function(request,result) {
    request.approved = result;
    request.active = false;

    var book = request.bookId;
    book.owner = request.requesterId._id;

    $http.post('/request/' + request._id,request).then(
      function (request) {
        console.log(request);
        getUserRequests();
    },function (erro) {
        console.log(erro);
    });

    if (result){
      $http.post('/books/' + book._id,book).then(
        function (book) {
          console.log(book);
          getBooks();
      },function (erro) {
          console.log(erro);
      });
    }
  }

  $scope.cancel = function(request) {
    $http.delete('/request/'+request._id).then(
      function () {
        getMyRequests();
        // exibir mensagem
    },function (erro) {
      console.log(erro);
    });
  };

  $scope.setPresentation = function(presentation) {
    $scope.presentation = presentation;
  };

  $scope.checkPresentation = function(string) {
    return $scope.presentation == string;
  };
});
