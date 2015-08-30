angular.module('booktoshare',['ngRoute','ngResource']).config(function ($routeProvider) {
  $routeProvider.when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/s',{
    templateUrl:'partials/search.html'
  });

  $routeProvider.when('/add',{
    templateUrl:'partials/addbook.html'
  });

  $routeProvider.when('/login',{
    templateUrl: 'partials/login.html'
  });

  $routeProvider.otherwise({redirectTo:'/'});
});
