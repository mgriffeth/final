(function(){
  angular.module('CookForMe',['ngRoute','ngCookies'])
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
        controller: 'UserController'
      });

    $routeProvider.when('/login',{
      templateUrl: 'templates/login-view.html',
      controller: 'UserController'
      });

    $routeProvider.when('/register',{
      templateUrl:'templates/register-view.html',
      controller: 'UserController'
    });

    $routeProvider.when('/newdish',{
      templateUrl:'templates/new-menu-item.html',
      controller: 'CooksController'
    });

    $routeProvider.when('/cookProfile/',{
      templateUrl: 'templates/cook-profile.html',
      controller: 'CooksController'
    });

    $routeProvider.when('/editProfile',{
      templateUrl: 'templates/edit-profile.html',
      controller: 'CooksController'
    });

    $routeProvider.when('/editDish/:did',{
      templateUrl: 'templates/edit-dish.html',
      controller: 'EditDishController'
    });

    $routeProvider.when('/singleCook/:cid',{
      templateUrl: 'templates/single-cook.html',
      controller: 'SingleCookController'
    });

    $routeProvider.when('/allcooks',{
      templateUrl: 'templates/cook-list.html',
      controller: 'EmployerController'
    });


  });
}());
