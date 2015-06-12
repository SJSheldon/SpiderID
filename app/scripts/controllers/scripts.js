'use strict';
var spideridApp = angular.module('spideridApp', []);


spideridApp.controller('spiderCtrl', function($scope, $http) {
    //  $scope.primaryColor = "color";
    // $scope.secondaryColor = "color";
  
    $('.btn').on('click', function() {

        $http.get('scripts/spiders/spiders.json').success(function(data) {
            $scope.spiders = data;


            console.table($scope.spiders);
        });
    });

});
