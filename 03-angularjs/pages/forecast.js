app.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService',
        function($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '3';

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

    $scope.convertToCelcius = function(degK) {
        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function(date) {
        // Date in milliseconds within the API
        return new Date(date * 1000);
    }

}]);
