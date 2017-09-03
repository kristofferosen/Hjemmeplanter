var App = angular.module('App', ['ngRoute', 'ngMessages', 'ngSanitize', 'ngCookies','angular-jwt','ngResource','chart.js','angular-momentjs']);

App.config(function ($routeProvider) {

    $routeProvider
    //admin
        .when('/', {templateUrl: 'pages/dashboard.html', controller: 'dashController'});

});

App.controller('dashController', function ($scope, $http) {

    $scope.init = function(){

        var req = {
            method: 'GET',
            url: 'http://192.81.221.165:80/api/datapoint'
        };
        $http(req).then(function(out){

            console.log(out.data)

            $scope.8969837moist = [];
            $scope.8969837temp = [];

            $scope.1800741moist = [];
            $scope.1800741temp = [];

            $scope.1796642moist = [];
            $scope.1796642temp = [];

            $scope.14790735moist = [];
            $scope.14790735temp = [];

            $scope.8969661moist = [];
            $scope.8969661temp = [];

            for(i = 0; i < out.data.length; i++){

                if(out.data[i].chipcode == 8969837.000000){

                   $scope.8969837moist.push(out.data[i].soilMoisture);
                   $scope.8969837temp.push(out.data[i].soilTemperature);

                }

                if(out.data[i].chipcode == 1800741.000000){

                   $scope.1800741moist.push(out.data[i].soilMoisture);
                   $scope.1800741temp.push(out.data[i].soilTemperature);

                }

                if(out.data[i].chipcode == 1796642.000000){

                   $scope.1796642moist.push(out.data[i].soilMoisture);
                   $scope.1796642temp.push(out.data[i].soilTemperature);

                }

                if(out.data[i].chipcode == 14790735.000000){

                   $scope.14790735moist.push(out.data[i].soilMoisture);
                   $scope.14790735temp.push(out.data[i].soilTemperature);

                }

                if(out.data[i].chipcode == 8969661.000000){

                   $scope.8969661moist.push(out.data[i].soilMoisture);
                   $scope.8969661temp.push(out.data[i].soilTemperature);

                   date = new Date(out.data[i].time)
                   if(i%10 == 0){$scope.b.push(date.toLocaleString())}
                   else {$scope.b.push('')}
                }

            }

            $scope.options = {

                datasetFill  : false,
                scaleShowGridLines: false,
                pointDot: false
            }

            $scope.plants = $scope.a;

            $scope.labels = $scope.b;

            $scope.data = [
                $scope.a,$scope.x,$scope.y
            ];


            $scope.14790735data = [
                $scope.14790735moist,$scope.14790735temp
            ];
            $scope.1800741data = [
                $scope.1800741moist,$scope.1800741temp
            ];
            $scope.8969837data = [
                $scope.8969837moist,$scope.8969837temp
            ];
            $scope.1796642data = [
                $scope.1796642moist,$scope.1796642temp
            ];
            $scope.8969661data = [
                $scope.8969661moist,$scope.8969661temp
            ];


            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };

        });




    };
});


App.run(function ($rootScope) {

    $rootScope.$on('$viewContentLoaded',function(){
        jQuery('html, body').animate({ scrollTop: 0 }, 0);
    });

});