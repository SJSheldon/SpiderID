'use strict';
var spideridApp = angular.module('spideridApp', []);

spideridApp.controller('spiderCtrl',function($scope, $http) {
        $http.get('scripts/spiders/spiders.json').success(function(data) {
            $scope.spiders = data;
            console.table($scope.spiders);
        });
    });



/* App Module */

// var phonecatApp = angular.module('spideridApp', [
//  'ngRoute',

//  'spiderIdControllers',

// ]);

// spideridApp.config(['$routeProvider',
//  function($routeProvider) {
//    $routeProvider.
//      when('/phones', {
//        templateUrl: 'partials/phone-list.html',
//        controller: 'PhoneListCtrl'
//      }).
//      when('/phones/:phoneId', {
//        templateUrl: 'partials/phone-detail.html',
//        controller: 'PhoneDetailCtrl'
//      }).
//      otherwise({
//        redirectTo: '/phones'
//      });
//  }]);
