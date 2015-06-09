'use strict';
var apiBaseURL = 'http://admin:admin@127.0.0.1:5000';
/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular.module('frontendApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}).factory('getArticles', function($http) {
  return {
    getJson: function() {
      var url = apiBaseURL + '/articles/';
      var promise = $http.get(url);
      return promise.then(function(result) {
        return result.data;
      });
    }
  };
});