'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
app.controller('MainCtrl', function($scope, $http) {


  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  var store = this;
  store.posts = [];
  $http.get('posts.json').success(function(data) {
    store.posts = data;
  });

  this.post = {};

  this.addPost = function() {
    this.post.date = {};
    this.post.date.$date = Date.now();
    store.posts.push(this.post);
    this.post = {};
  };
});

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'Dialog.html'
  };
});

