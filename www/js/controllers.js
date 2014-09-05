angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {

  $scope.detailsVisible = false;

  $scope.toggleDetails = function(t) {
    $scope.detailsVisible = !$scope.detailsVisible;
  }

})

