'use strict';

/**
 * @ngdoc overview
 * @name ytApp
 * @description
 * # ytApp
 *
 * Main module of the application.
 */
var ytApp = angular.module('ytApp', [
        'ngRoute'
    ]);

ytApp.config(function ($routeProvider) {
    $routeProvider
    	.when('/:q/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
});
