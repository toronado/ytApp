'use strict';

/*
=== Controller: Main ===
*/
    ytApp.controller('MainCtrl', function ($scope, $routeParams, dataFactory) {

        // Fetch JSON data using get factory
        
        $scope.onSubmit = function() {
            window.location.href = '#/' + $scope.searchTerm;
        };

        $scope.q = $routeParams.q || 'Hitchens';

        dataFactory.get($scope.q).then(function (data) {
            $scope.videos = data['items'];
        });

    });



/*
=== Factory: Get Data ===
*/
    ytApp.factory('dataFactory', function ($http) {
        return {
            get : function(q) {
                return $http({
                    method: 'GET',
                    url: 'https://www.googleapis.com/youtube/v3/search',
                    params: {
                        key: 'AIzaSyDsvYDH33I4JN-N9R5gNZ2J5e1w2vuzJG0',
                        type: 'video',
                        maxResults: '50',
                        part: 'snippet',
                        q: q,
                        order: 'relevance'//rating,viewCount,relevance
                    }
                })
                .then(function (response) {
                    return response.data;
                });
            }
        };
    });
