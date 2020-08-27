
var app = angular.module("app", ['ui.router', 'ngAnimate']);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
}]);

app.controller("mainCtrl", ["$rootScope", "$scope", "$log", '$window',
    function ($rootScope, $scope, $log, $window) {
        $log.info("Angular application started!");

        $scope.openNav = true;
        $scope.windowWidth = $( window ).width();

        $scope.width = $window.innerWidth;

        angular.element($window).bind('resize', function () {
            $scope.$apply(function () {
                $scope.width = $window.innerWidth;

                if($scope.width < 1400){
                    $scope.openNav = false;
                }else{
                    $scope.openNav = true;
                }
            });
        });

    }
]);