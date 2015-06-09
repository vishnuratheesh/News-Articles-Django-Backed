'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp').controller('ArticleCtrl', function($scope, $routeParams, getArticle) {
  $scope.article_id = $routeParams.articleId;

  $scope.article = {
    'title': 'Awesome stuff coming up! Soon...'
  };

  getArticle.getJson($scope.article_id).then(function(data) {
    $scope.article = data;
    //$scope.article.pub_date = new Date($scope.article.pub_date)
    var dispTimeISOString = $scope.article.pub_date;
    var dispTime = new Date(dispTimeISOString);
    dispTime = new Date(dispTime.getTime() + (dispTime.getTimezoneOffset() * 60000));
    $scope.article.humanDate = dispTime.toLocaleDateString() + ' - ' + dispTime.toLocaleTimeString();
  });

});