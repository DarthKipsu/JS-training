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
