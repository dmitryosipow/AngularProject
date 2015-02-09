'use strict';

describe('Directive: Post', function() {

  beforeEach(module('angularProjectApp'));

  // Need to install karma-ng-html2js-preprocessor to load templates for
  // directive in the test.
  beforeEach(module('app/templates/Blogpost.html'));

  var element,
      scope,
      postInfo = {
        id: '54d38817fef38b74188ed034',
        author: 'Это я',
        body: 'А я иду, гуляю по Москве',
        date: '1423149343725',
        title: 'Мой пост'
      };

  beforeEach(inject(function($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();
    scope.post = postInfo;
    var template = $templateCache.get('app/templates/Blogpost.html');
    $templateCache.put('templates/Blogpost.html', template);
    //console.log(template);

  }));

  it('should show info according to scope object post', inject(function($compile) {
    element = angular.element('<blog-post></blog-post>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('p').text()).toBe(postInfo.body);
  }));

});
