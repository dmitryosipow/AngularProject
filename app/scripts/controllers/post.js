app.controller('PostCtrl', function($scope, $routeParams, PostRes, $location) {
  $scope.currentPost = PostRes.get({id: $routeParams.id});

  $scope.currentPost.$promise.then(function(data) {
    console.log('Promises success', data);
  });

  $scope.goToUrl = function(path) {
    $location.path(path);
  };
});
