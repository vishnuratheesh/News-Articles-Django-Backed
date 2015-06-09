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
}).controller('WhatNextSectionCtrl', function($scope, $timeout, getArticles) {
  $scope.whatnext = [{
    'title': 'Awesome stuff coming up! Soon...'
  }];

  getArticles.getJson().then(function(data) {
    $scope.whatnext = data.results;

    var letsSlickIt = function() {
      $('.articleslider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
      });
      $('#slickNext').click(function() {
        $('#articleslider').slick('slickNext');
      });
      $('#slickPrev').click(function() {
        $('#articleslider').slick('slickPrev');
      });


    };
    $timeout(letsSlickIt, 200);

  });
});