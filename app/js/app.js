'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {templateUrl: 'partials/welcome.html', controller: 'MyCtrl1'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'MyCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
