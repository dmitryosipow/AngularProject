'use strict';

/**
 * @ngdoc overview
 * @name angularProjectApp
 * @description
 * # angularProjectApp
 *
 * Main module of the application.
 */

var app = angular
  .module('angularProjectApp', ['ngSanitize', 'ngResource','ngRoute','extraServices']);

app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/Main.html'
      })
      .when('/blog/:id', {
        templateUrl: 'views/Post.html',
        controller: 'PostCtrl'
      });
});
