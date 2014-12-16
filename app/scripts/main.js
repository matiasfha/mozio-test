/* jshint devel:true */
'use strict';
(function(){
  angular.module('mozio-test',['mozio-directives','ngRoute','ngAnimate'])
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
    console.log('MainController');
  });
})();
