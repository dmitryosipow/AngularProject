'use strict';

describe('Controller: MainCtrl', function () {

  // Load the controller's module
  beforeEach(module('angularProjectApp'));
  beforeEach(module('extraServices'));

  var MainCtrl,
      scope,
      postsService,
      respondItems = [
        {
          _id: '54d38817fef38b74188ed034',
          author: 'Это я',
          body: 'А я иду, гуляю по Москве',
          date: '1423149343725',
          title: 'Мой пост'
        },
        {
          _id: '54d38817fef38b74188ed035',
          author: 'Это я',
          body: 'А я иду',
          date: '1423149343123',
          title: ''
        }],
      // info from form input
      newPost = {
        author: 'Василий',
        body: 'Добавляем',
        title: 'Мой пост опять'
      };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {

    // Controller is expecting respond contains promises object.
    // Simulate empty promise object here.
    respondItems.$promise = new Promise(function(resolve, reject) {});

    // Simulate respond from server.
    postsService = $injector.get('PostRes');
    spyOn(postsService, 'query').and.returnValue(respondItems);

    // New post is not simple object but resource object for interaction with REST server.
    // Simulating saving function for this object.
    newPost.$save = function(){};
    spyOn(newPost, '$save').and.callFake(function() {
      respondItems.push(newPost);
      return new Promise(function(resolve, reject) {});
    });

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

  }));

  it('should add new item to list', function () {

    // When controller is created it already makes request to get posts.
    // Remember initial posts number.
    var length = scope.posts.length;

    // Simulate adding new post to controller from input form.
    MainCtrl.post = newPost;
    MainCtrl.addPost();

    expect(scope.posts.length).toBe(length+1);

  });
});
