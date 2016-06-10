(function () {
    'use strict';
    
    var app = angular.module('routes', ['ui.router', 'caseCtrl']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        var router = $stateProvider;

        router.state('index', {
            url: "/",
            templateUrl: "app/partials/index.html"
        });
        
        router.state('cases', {
            url: "/cases/:slug",
            templateUrl: "app/partials/cases.html",
            controller: 'caseCtrl'
        });
        
        router.state('contact', {
            url: "/kontakt",
            templateUrl: "app/partials/contact.html"
        });
    });
})();