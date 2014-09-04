app.factory('PostRes', function($resource) {
  return $resource('http://54.72.3.96:3000/posts/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
});