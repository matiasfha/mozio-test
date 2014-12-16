/* jshint devel:true */
'use strict';
(function(){
  angular.module('mozio-directives')
  .directive('mzButton',MozioButtonDirective);
  function MozioButtonDirective(){
    return{
      restrict:'E',
      scope:{
        color:"@"
      },
      replace:true,
      transclude:true,
      template:getTemplate,
      controller:mozioButtonCtrl
    }
  };


  function isAnchor(attr){
    return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
  };

  function getTemplate(element,attr){
    if(isAnchor(attr)){
      return '<a class="mz-button mz-raised" ng-transclude data-ng-click="onClick()"></a>';
    }else{
      return '<button class="mz-button mz-raised" ng-transclude data-ng-click="onClick()"></button>';
    }
  };

  function mozioButtonCtrl($scope,hey){
    $scope.onClick = function(){
      hey.emit('color-change',{color:$scope.color});
    };
  };
})();
