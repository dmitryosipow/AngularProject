'use strict';

describe('Controller: PostCtrl', function () {

  // Load the controller's module
  beforeEach(module('angularProjectApp'));

  var postsService,
      PostCtrl,
      scope,
      // object simulates respond from server
      post = {
        _id: '54d38817fef38b74188ed034',
        author: 'Это я',
        body: 'А я иду, гуляю по Москве',
        date: '1423149343725',
        title: 'Мой пост'
      };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    postsService = $injector.get('PostRes');
    spyOn(postsService, 'get').andReturn(post);

    scope = $rootScope.$new();
    PostCtrl = $controller('PostCtrl', {
      $scope: scope,
      $routeParams : {
        id : post._id
      }
    });
  }));

  it('should load post info from server and add to its scope', function () {
    expect(scope.currentPost).toEqual(post);
  });
});
