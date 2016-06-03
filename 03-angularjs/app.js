// MODULE
var app = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'})
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'})
});

// CONTROLLERS
app.controller('homeController', ['$scope', function($scope) {
}]);

app.controller('forecastController', ['$scope', function($scope) {
}]);
