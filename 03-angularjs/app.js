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

// SERVICES

// This service allows me to share key data (city) between my controllers.
app.service('cityService', function() {
    this.city = 'Helsinki';
});

// CONTROLLERS
app.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });


}]);

app.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
}]);
