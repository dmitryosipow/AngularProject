/**
 * Directive for creating fileread 2-way bind parameter on file input in order
 * to update post object after file selection.
 */
app.directive('fileread', [function() {
  return {
    scope: {
      fileread: '='
    },
    link: function(scope, element, attributes) {
      element.bind('change', function(changeEvent) {
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
          scope.$apply(function() {
            scope.fileread = loadEvent.target.result;
          });
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  };
}]);