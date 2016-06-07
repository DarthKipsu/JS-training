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
        .when('/forecast/:days', {
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

app.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',
        function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '3';

    $scope.weatherAPI = $resource(
            '//api.openweathermap.org/data/2.5/forecast/daily',
            {callback: 'JSON_CALLBACK'},
            {get: {method: 'JSONP'}});
    
    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        appid: OPENWEATHERMAP_APIKEY});

    $scope.convertToCelcius = function(degK) {
        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function(date) {
        // Date in milliseconds within the API
        return new Date(date * 1000);
    }

}]);
