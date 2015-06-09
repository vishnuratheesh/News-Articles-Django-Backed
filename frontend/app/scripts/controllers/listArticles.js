'use strict';

angular.module('frontendApp').directive('articles', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      loc: '@location',
      articles: '='
    },
    link: function($scope, $element) {
      if ($scope) {}
      if ($element) {}
    },
    templateUrl: 'views/listArticles.html'
  };
}).controller('ListArticlesSectionCtrl', function($scope, getArticles) {
  $scope.articles = [{
    'title': 'Awesome stuff coming up! Soon...'
  }];

  getArticles.getJson().then(function(data) {
    $scope.articles = data.results;
  });
});