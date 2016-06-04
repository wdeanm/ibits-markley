var elfApp = angular.module('elfApp');


// javascript file home.js
elfApp.controller('HomeController', function($scope) {
    'use strict';
    $scope.description = 'HomeController Data';

});


//jade or html.   home-controller.jade  
elfApp.directive('elfHomeDescription', function() {
    'use strict';
    return {
        controller: 'HomeController',
        templateUrl: 'home-controller'
    };
});