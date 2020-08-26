
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'pages/welcome/welcome.html',
            controller: 'ctrl_welcome'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'pages/dashboard/dashboard.html',
            controller: 'ctrl_dashboard'
        });
    $urlRouterProvider.otherwise('/welcome');
}]);