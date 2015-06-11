
var myMod = angular.module('SpiderID', []);
  myMod.controller('SpiderListCtrl', ['$scope', '$http',
      function($scope, $http) {
          $http.get('spiders/spiders.json').success(function(data) {
              $scope.spiders = data;
              console.table($scope.spiders);
          });
  }]);
  