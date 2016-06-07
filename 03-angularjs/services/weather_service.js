app.service('weatherService', ['$resource', function($resource) {

    this.getWeather = function(city, days) {
        var weatherAPI = $resource(
                '//api.openweathermap.org/data/2.5/forecast/daily',
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}});
    
        return weatherAPI.get({
            q: city,
            cnt: days,
            appid: OPENWEATHERMAP_APIKEY});
    }

}]);
