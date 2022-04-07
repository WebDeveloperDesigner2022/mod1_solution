(function() {
'use strict';

angular.module('appModule', [])

    .controller('appControllerModule', function($scope) {
        
        $scope.items = [];
        $scope.message = '';
        $scope.classChecker = null;
        $scope.whiteSpaceChecker = false;

        $scope.getItems = function() {
            if (!$scope.items || !$scope.items.length) {
                $scope.message = 'Please enter data first.';
                $scope.classChecker = false;
            } else {
                var tempTotal = $scope.items.split(',');
                $scope.classChecker = true;
                    if (tempTotal.length > 3) {
                        $scope.message = 'Too much!';
                    } else {
                        $scope.message = 'Enjoy';
                    }
            }
        }
    });

})();