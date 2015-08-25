angular.module('booktoshare',['ngRoute','ngResource']).config(function ($routeProvider) {
  $routeProvider.when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });
});
