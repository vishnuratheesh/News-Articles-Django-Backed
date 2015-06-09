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
    template: '<ul class="nav {{loc}}">' +
      '<li ng-repeat="m in menus.left">' +
      '<a href="{{m.link}}">{{m.text}}</a>' +
      '</li>' +
      '</ul>'
  };
}).controller('MenuCtrl', function($scope) {
  $scope.menus = {
    'current': 'index',
    'left': [{
      'active': true,
      'link': '\/',
      'text': 'Home'
    }, {
      'active': false,
      'link': '\/awards',
      'text': 'Awards'
    }, {
      'active': false,
      'link': '\/players',
      'text': 'Players'
    }, {
      'active': false,
      'link': '\/episodes',
      'text': 'Episodes'
    }, {
      'active': false,
      'link': '\/about',
      'text': 'About'
    }, {
      'active': false,
      'link': '\/contact',
      'text': 'Contact Us'
    }],
    'rightLink': '\/session\/index',
    'rightText': 'Log In'
  };
});