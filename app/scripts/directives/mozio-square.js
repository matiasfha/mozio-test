/* jshint devel:true */
'use strict';
(function(){
  angular.module('mozio-directives')
  .directive('mzSquare',MozioSquareDirective);
  function MozioSquareDirective(){
    return{
      restrict:'E',
      replace:true,
      transclude:true,
      template:getTemplate,
      controller:mozioSquareCtrl
    }
  };


  function isAnchor(attr){
    return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
  };

  function getTemplate(element,attr){

    return '<div class="mz-square" data-ng-class="color"></div>'
  };

  function mozioSquareCtrl($scope,hey){
    hey.listen('color-change',colorChange);
    $scope.color= '';
    function colorChange(args,data){
      if ((typeof data !== "undefined" && data !== null ? data.color : void 0) != null) {
        $scope.color = 'mz-background-'+data.color;
      }
    }
  };
})();
