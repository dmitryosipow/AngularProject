'use strict';

describe('Extra service unit test', function () {
  var textFormat,
      testString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut' +
          ' labore ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore';

  beforeEach(module('extraServices'));

  beforeEach(inject(function ($injector) {
    textFormat = $injector.get('TextFormat');
  }));

  it('should cut string to last word according to maxSymbols parameter and add ... at the end', function () {
    var str,
        maxSymbols = 100;

    str  = textFormat.cut(testString,maxSymbols);
    expect(str.length).toBeLessThan(maxSymbols+4);
  });
});