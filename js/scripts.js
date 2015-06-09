
var myMod = angular.module('SpiderID', []);
  myMod.controller('BeachesListCtrl', ['$scope', '$http',
      function($scope, $http) {
          $http.get('JSONfiles/spiders/spiders.json').success(function(data) {
              $scope.spiders = data;
              console.table($scope.spiderss);
          });
  }]);