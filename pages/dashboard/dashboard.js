app.controller("ctrl_dashboard", ['$scope',
 function ($scope) {

     $scope.showButtons = false;
     $scope.output = false;
     $scope.showDeleteButton = false;

     $scope.showOutput = function() {
        $scope.output = true;

    }

}]);


