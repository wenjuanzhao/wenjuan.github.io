angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state("index",{
        url:"/index",
        templateUrl:"tpls/index.html"
    })
}])