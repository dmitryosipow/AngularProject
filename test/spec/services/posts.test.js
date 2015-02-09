'use strict';

describe('Posts service unit test', function() {
  var $httpBackend,
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
        }];

  beforeEach(module('angularProjectApp'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', 'http://54.72.3.96:3000/posts').respond(respondItems);
    postsService = $injector.get('PostRes');
  }));

  afterEach(function() {
    // Verifies that all of the requests defined via the expect api were made.
    // If any of the requests were not made, verifyNoOutstandingExpectation throws an exception.
    $httpBackend.verifyNoOutstandingExpectation();
    // Verifies that there are no outstanding requests that need to be flushed.
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return items on the start', function() {
    var items;

    items = postsService.query();
    expect(items).toBeDefined();
    expect(items.length).toBe(0);

    $httpBackend.expectGET('http://54.72.3.96:3000/posts');
    $httpBackend.flush();

    expect(items).toBeDefined();
    expect(items.length).toBe(2);
  });
});
