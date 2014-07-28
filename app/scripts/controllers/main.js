'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
console.log('fdsfds');
    var store = this;
    store.posts = [];
    $http.get('posts.json').success(function(data){
      store.posts = data;
    });
  });
