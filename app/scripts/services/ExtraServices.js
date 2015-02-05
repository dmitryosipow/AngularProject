/**
 * Created by Dzmitry_Osipau on 2/5/2015.
 */
var module = angular.module('extraServices', []);

module.service('TextFormat', function() {

  this.cut = function(textString, maxCount) {
    if (textString != undefined) {
      if (textString.length >= maxCount) {
        // find end of last word
        var ind = textString.indexOf(' ', maxCount);
        if (ind) {
          maxCount = ind;
        }
        // and cut
        return textString.slice(0, maxCount) + '...';
      }
      else return textString;

    } else {
      return '...';
    }
  };

});
