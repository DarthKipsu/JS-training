app.directive('weatherReport', function() {
    return {
        templateUrl: 'components/weather_report.html',
        scope: {
            weather: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
});
