(function(){
  angular.module('CookForMe',['ngRoute'])
    .constant('Parse_Headers',{
      headers:{
      "X-Parse-Application-Id" : "JOXuzVvxYQHqMZwmbjp3tSE8eJT7jdYhyLL6oMuo",
        "X-Parse-REST-API-Key" : "uBxYWP3vS8tRCgHT2l2OI0jIf7TawGZCU6quXWTV",
        "Content-Type" : "application/json"
      }
    })
    .config(function($routeProvider){

      $routeProvider.when('/',{
        templateUrl:'templates/home-view.html',
        controller: 'GuestController'
      });

    $routeProvider.when('/login',{
      templateUrl: 'templates/login-view.html',
      controller: 'GuestController'
      });

      $routeProvider.when('/register',{
        templateUrl:'templates/register_view.html',
        controller: 'GuestController'
      });

  });
}());
