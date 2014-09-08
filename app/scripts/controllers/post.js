app.controller('PostCtrl', function($scope, $routeParams, PostRes, $location) {
  $scope.currentPost = PostRes.get({id: $routeParams.id});

  $scope.goToUrl = function(path) {
    $location.path(path);
  };
});
