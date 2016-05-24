/*global document*/

(function () {
    'use strict';

    angular.module('myModule', ['ngRoute', 'myControllers', 'indexModule'])

    /**
    * Config routing.
    */
    .config(function ($routeProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;

        $routeProvider
        .when('/welcome', {
            controller: 'welcomectrl', //welcomectrl is defined in myControllers inside welcomeController.js
            controllerAs: 'vm',
            templateUrl: 'sections/welcome/welcome.html'
        })
        .when('/test', {
            // controller: 'WelcomeController',
            //controllerAs: 'vm',
            templateUrl: 'sections/test/test.html'
        })
        .otherwise({
            redirectTo: '/welcome'
        });
    })

    /**
     * General configuration.
     */
    .config(function ($locationProvider, $compileProvider) {
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|tel|mailto|x-wmapp0|chrome-extension):/);
    });

    /**
    * Manually bootstrap application.

    function bootstrapApplication() {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myModule']);
        });
    }

    bootstrapApplication();
    */
}());
