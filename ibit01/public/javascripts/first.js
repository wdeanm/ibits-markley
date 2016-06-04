var elfApp = angular.module('elfApp');

//controller is a javascript first.js
elfApp.controller('FirstController', function($scope, $http) {
    'use strict';

    $scope.description = 'First Controller Description';

    $scope.loadData = function() {
        $http.get('Presidents.json')
            .then(function(presidents) {
                $scope.presidents = JSON.stringify(presidents, null, 4);
            })
    };

    $scope.loadData();
});

// directive is jade file first-controller.jade
elfApp.directive('elfFirstDescription', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-controller'
    };
});

elfApp.directive('elffirstData', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-data'
    };
});

