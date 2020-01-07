(function() {
  var catalog = function() {
    return {
      restrict: 'EA',
      templateUrl: '/views/directives/catalog.html',
      controller: 'catalogController',
      controllerAs: 'tvm'
    };
  }
  
  angular
  	.module('photogram')
    .directive('catalog', catalog);
})();