'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
app.controller('MainCtrl', function($scope, $http, PostRes, TextFormat) {

  var controller = this;

  controller.modalShown = false;
  $scope.toggleModal = function() {
    controller.modalShown = !controller.modalShown;
  };

  this.addPost = function() {
    this.post.date = {};
    this.post.date = Date.now();

    $scope.toggleModal();

    if (this.post._id) {
      PostRes.update({id: this.post._id},this.post);
    }else {
      this.post.$save().then(function(response) {
        $scope.posts.push(response);
        $scope.posts = PostRes.query();
        $scope.posts.$promise.then(function(data) {
          data.forEach(correctList);
        });
      });
    }

    this.post = new PostRes();
  };

  $scope.deletePost = function(post) {
    PostRes.delete({id: post._id },function() {
      console.log('delete');
      $scope.posts = PostRes.query();
      $scope.posts.$promise.then(function(data) {
        data.forEach(correctList);
      });
    });
  };

  $scope.editPost = function(post) {
    controller.post = post;
    $scope.toggleModal();
  };

  this.post = new PostRes();

  $scope.posts = PostRes.query();
  $scope.posts.$promise.then(function(data) {
    data.forEach(correctList);
    console.log('In Promises', data);
  });

  function correctList(obj) {
    obj.id = obj._id;
    obj.body = TextFormat.cut(obj.body, 100);
  }

});


