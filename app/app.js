angular
    .module('workshopApp', ['ngRoute'])
    .config(['$routeProvider', Config])
    .controller('LoginCtrl', ['$scope', '$location', LoginCtrl])
    .controller('ForgotCtrl', ['$scope', '$location', LoginCtrl]);

function Config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller:  'LoginCtrl'
        })
        .when('/forgot', {
            templateUrl: 'forgot.html',
            controller:  'ForgotCtrl'
        })
        .when('/landing', {
            templateUrl: 'landing.html'
        })
        .otherwise('/');
}

function LoginCtrl ($scope, $location) {
    $scope.submit = function () {
        if ($scope.user &&
            $scope.user.email === 'user@workshop.com' &&
            $scope.user.password === 'password') {
            $location.url('/landing');
        } else {
            $scope.badPassword = true;
        }
    };
}

function ForgotCtrl ($scope, $location) {

}
