(function(){
  angular.module('CookForMe')
    .controller('EditDishController',['$scope','$location','$http','Parse_Headers','AllUsersFactory','$cookieStore','$cookies', '$routeParams',
    function($scope,$location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies, $routeParams){

      var user = $cookieStore.get('activeUser');
      console.log(user);
      var baseUrl = 'https://api.parse.com/1/';

      var User_Headers = {
        headers:{
          "X-Parse-Application-Id" : "JOXuzVvxYQHqMZwmbjp3tSE8eJT7jdYhyLL6oMuo",
          "X-Parse-REST-API-Key" : "uBxYWP3vS8tRCgHT2l2OI0jIf7TawGZCU6quXWTV",
          'X-Parse-Session-Token': user.sessionToken,
          "Content-Type" : "application/json"
        }
      };

      $http.get(baseUrl + 'classes/dishClass/' + $routeParams.did, Parse_Headers).success(function(data){
        console.log(data);
        $scope.dish = data;
      });

      $scope.edit = function(dish){
        $http.put(baseUrl + "classes/dishClass/" + $routeParams.did, dish ,User_Headers).success(function(){
          $location.path('/cookProfile')
        });
      }

    }
  ]);
}());
