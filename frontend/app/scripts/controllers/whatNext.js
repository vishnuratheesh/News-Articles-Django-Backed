'use strict';

angular.module('frontendApp').directive('whatnext', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      loc: '@location',
      whatnext: '='
    },
    link: function($scope, $element) {
      if ($scope) {}
      if ($element) {}
    },
    templateUrl: 'views/whatNext.html'
  };
}).controller('WhatNextSectionCtrl', function($scope, getArticles) {
  $scope.whatnext = [{
    'title': 'Awesome stuff coming up! Soon...'
  }];

  getArticles.getJson().then(function(data) {
    $scope.whatnext = data.results;
  });
});