/**
 * Created by Ronk1 on 14/06/17.
 */
'use strict';

angular.module('myApp.mapView', ['ngRoute', 'myApp.events'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mapView', {
            templateUrl: 'mapView/mapView.html',
            controller: 'mapCtrl',
            resolve: {
                // controller will not be loaded until $requireSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $requireSignIn returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $routeChangeError (see above)
                    return Auth.$requireSignIn();
                }]

            }
        })
    }])

    .controller('mapCtrl', ['$scope', '$rootScope', 'Event',
        function($scope, $rootScope, Event) {

            $scope.dati={};
            $scope.dati.vm = this;
            $scope.dati.vm.positions = [];

            $rootScope.dati.currentView = "map";

            $scope.dati.events = Event.getData();
            $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdX2NDbEB1g1-13kcdDPkAY3lpUggnPPE";
            $scope.dati.events.$loaded().then(function() {
                console.log($scope.dati.events.length);
                for (var i = 0; i < $scope.dati.events.length; i++) {
                    var lat = 45.071087 + (Math.random() / 100);
                    var lng = 7.686567 + (Math.random() / 100);
                    $scope.dati.vm.positions.push({lat: lat, lng: lng});
                }
                console.log("vm.positions", $scope.dati.vm.positions);

        });

    }]);