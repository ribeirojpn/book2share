angular.module('booktoshare',['ngRoute','ngResource']).config(function ($routeProvider) {
  $routeProvider.when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/s',{
    templateUrl:'partials/search.html'
  });

  $routeProvider.when('/add',{
    templateUrl:'partials/addbook.html',
    controller: 'AddBookController'
  });

  $routeProvider.when('/books',{
    templateUrl: 'partials/books.html',
    controller: 'BookListController'
  });

  $routeProvider.when('/mybooks',{
    templateUrl: 'partials/mybooks.html',
    controller: 'UserBooksController'
  });

  $routeProvider.when('/books/:id',{
    templateUrl: 'partials/book.html',
    controller: 'BookController'
  });

  $routeProvider.when('/config',{
    templateUrl: 'partials/config.html',
    controller: 'ConfigController'
  });

  $routeProvider.when('/login',{
    templateUrl: 'partials/login.html'
  });

  $routeProvider.otherwise({redirectTo:'/'});
});
