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
    template: '<div class="nav pull-left" style="border:2px solid #e6e6e6;">' +
      '<div style="border:2px solid #e6e6e6;height: 65px;"> </div>' +
      '<div style="border:2px solid #e6e6e6;height: 25px;">&nbsp;&nbsp;&nbsp;<i class="fa fa-bars"></i>&nbsp;|&nbsp;<i class="fa fa-search"></i></div>' +
      '<ul class="nav {{loc}}">' +
      '<li ng-repeat="m in menus.left">' +
      '<a href="{{m.link}}">{{m.text}}</a>' +
      '</li>' +
      '</ul></div>'
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