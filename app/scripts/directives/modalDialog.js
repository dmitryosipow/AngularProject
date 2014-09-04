/**
 * Directive for show/hide dialog box
 */
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'templates/Dialog.html'
  };
});