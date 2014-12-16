/* jshint devel:true */
'use strict';
(function(){
  angular.module('mozio-directives',[])
  .directive('mozioButton',MozioButtonDirective);
  function MozioButtonDirective(){
    return{
      restrict:'E',
      replace:true,
      transclude:true,
      template:getTemplate
    }
  };


  function isAnchor(attr){
    return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
  };

  function getTemplate(element,attr){

    if(isAnchor(attr)){
      return '<a class="mz-button" ng-transclude></a>';
    }else{
      return '<button class="mz-button" ng-transclude></button>';
    }
  };
})();
