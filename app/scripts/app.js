'use strict';

angular.module('testForFE', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url:'/',
        views: {
            'content': {
                templateUrl : 'views/home.html',
                controller  : 'HomeController'
            }
        }
    })
    .state('app.article', {
        url:'article/:id',
        views: {
            'content@': {
                templateUrl : 'views/article.html',
                controller  : 'ArticleController'                  
            }
        }
    });
    $urlRouterProvider.otherwise('/');
});


