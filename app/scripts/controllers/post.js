app.controller('PostCtrl', function($scope, $routeParams, PostRes) {
  $scope.currentPost = PostRes.get({id: $routeParams.id});
});
