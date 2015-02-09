'use strict';

describe('Directive: ModalDialog', function() {

  beforeEach(module('angularProjectApp'));

  // Need to install karma-ng-html2js-preprocessor to load templates for
  // directive in the test.
  beforeEach(module('app/templates/Dialog.html'));

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
    var template = $templateCache.get('app/templates/Dialog.html');
    $templateCache.put('templates/Dialog.html', template);
    //console.log(template);

  }));

  it('should show info according to scope object post', inject(function($compile) {
    element = angular.element('<modal-dialog>' +
        '<p>{{post.body}}</p>' +
        '</modal-dialog>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('p').text()).toBe(postInfo.body);
  }));

});
