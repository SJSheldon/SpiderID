 'use strict';
 var spideridApp = angular.module('spideridApp', [

     //"ngRoute",
     "spideridAppCtrl",

 ]);


 // *
 //  * @ngdoc function
 //  * @name spideridApp.controller:MainCtrl
 //  * @description
 //  * # MainCtrl
 //  * Controller of the spideridApp
  
 angular.module('spideridApp')
   .controller('MainCtrl', function ($scope) {
     $scope.awesomeThings = [
       'primaryColor',
       'secondaryColor',
       'State'
     ];
   });
