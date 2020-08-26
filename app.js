
var app = angular.module("app", ['ui.router', 'dx']);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


    }]);


app.controller("mainCtrl", ["$rootScope", "$scope", "$log", '$window',
    function ($rootScope, $scope, $log, $window) {
        $log.info("Angular application started!");
        // Globalize.culture("en");
        // $rootScope.series_type = Globalize.localize("series_type");

        $scope.closedNav = true;

        $scope.showNav = function () {
            $scope.closedNav = true;
        }

        $scope.hideNav = function () {
            $scope.closedNav = false;
        }
    }
]);
