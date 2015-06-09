'use strict';

angular.module('frontendApp').directive('preview', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      loc: '@location',
      article: '='
    },
    link: function($scope, $element) {
      if ($scope) {}
      if ($element) {}
    },
    templateUrl: 'views/preview.html'
  };
}).controller('PreviewSectionCtrl', function($scope, getArticles) {
  $scope.article = {
    'title': 'Awesome stuff coming up! Soon...'
  };

  getArticles.getJson().then(function(data) {
    $scope.article = data.results[Math.floor(Math.random() * data.results.length)];
    //$scope.article.pub_date = new Date($scope.article.pub_date)
    var dispTimeISOString = $scope.article.pub_date;
    var dispTime = new Date(dispTimeISOString);
    dispTime = new Date(dispTime.getTime() + (dispTime.getTimezoneOffset() * 60000));
    $scope.article.humanDate = dispTime.toLocaleDateString() + ' - ' + dispTime.toLocaleTimeString();
  });
});