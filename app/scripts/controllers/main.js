'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
app.controller('MainCtrl', function($scope, $http, PostRes) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };


  this.addPost = function() {
    this.post.date = {};
    this.post.date = Date.now();

    $scope.toggleModal();

    if(this.post._id){
      PostRes.update({id:this.post._id},this.post.talk);
    }else {
      this.post.$save().then(function(response){
        $scope.posts.push(response);
      });
    }
    this.post = new PostRes();
  };

  $scope.deletePost = function(post) {
    PostRes.delete({id: post._id },function() {
      console.log('delete');
      $scope.posts = PostRes.query();
    });
  };

  this.post = new PostRes();

  $scope.posts = PostRes.query();
  $scope.posts.$promise.then(function(data){
    console.log('In Promises',data);
  });

});


/**
 * Directive for show/hide dialog box
 */
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
    templateUrl: 'templates/Dialog.html'
  };
});


/**
 * Directive for blog post
 */
app.directive('blogPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/Blogpost.html'
  };
});


/**
 * Directive for creating fileread 2-way bind parameter on file input in order
 * to update post object after file selection.
 */
app.directive('fileread', [function() {
  return {
    scope: {
      fileread: '='
    },
    link: function(scope, element, attributes) {
      element.bind('change', function(changeEvent) {
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
          scope.$apply(function() {
            scope.fileread = loadEvent.target.result;
          });
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  };
}]);

app.factory('PostRes', function($resource){
  var Post = $resource('http://54.72.3.96:3000/posts/:id',{},{
    update:{
      method:'PUT'
    }
  });
  return Post;
});

