'use strict';

angular.module('frontendApp', []).directive('menu', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      loc: '@location',
      menus: '='
    },
    link: function($scope, $element) {
      if ($scope) {}
      if ($element) {}
    },
    templateUrl: 'views/menu.html'
  };
}).controller('MenuCtrl', function($scope) {
  $scope.menus = {
    'current': 'index',
    'left': [{
      'active': true,
      'link': '\/',
      'text': 'Nav 1'
    }, {
      'active': false,
      'link': '\/',
      'text': 'Nav 2'
    }, {
      'active': false,
      'link': '\/',
      'text': 'Nav 3'
    }, {
      'active': false,
      'link': '\/',
      'text': 'Nav 4'
    }, {
      'active': false,
      'link': '\/about',
      'text': 'Nav 5'
    }],
    'rightLink': '\/session\/index',
    'rightText': 'Log In'
  };
});