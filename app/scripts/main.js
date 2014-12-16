/* jshint devel:true */
'use strict';
(function(){
  angular.module('mozio-directives',['hey']);
  angular.module('mozio-test',['mozio-directives','ngRoute'])
  .config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/',{
        templateUrl:'../../templates/index.html',
        controller:'MainCtrl'
      })
      .otherwise({redirectTo:'/'});
  })
  .controller('MainCtrl',function($scope){
    $scope.items = [
      {color:"red",text:"Red Button"},
      {color:"blue",text:"Blue Button"},
      {color:"green",text:"Green Button"}
    ]
  });
})();
