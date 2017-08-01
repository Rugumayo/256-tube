var myApp = angular.module('myApp',['ngRoute','angularTreeview']);

myApp.config(['$routeProvider',function($routeProvider){ 
$routeProvider.
when('/home', {
  controller: 'HomeController',	
  templateUrl: 'partials/home.html'
}).
when('/myTV', {
   controller: 'MyTVController',
   templateUrl: 'partials/myTV.html'
}).
when('/nTV', {
   controller: 'MyTVController',
   templateUrl: 'partials/nTV.html'
}).
otherwise({
  redirectTo: '/home'
});  
}]);
