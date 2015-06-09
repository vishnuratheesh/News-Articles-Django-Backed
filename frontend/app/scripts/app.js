'use strict';
var apiBaseURL = 'http://127.0.0.1:5000';
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
  'ngTouch',
  'slick'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/article/:articleId', {
      templateUrl: 'views/articleDetails.html',
      controller: 'ArticleCtrl'
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
}).factory('getArticle', function($http) {
  return {
    getJson: function(articleId) {
      var url = apiBaseURL + '/articles/' + articleId;
      var promise = $http.get(url);
      return promise.then(function(result) {
        return result.data;
      });
    }
  };
});