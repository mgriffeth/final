(function(){
  angular.module('CookForMe')
    .controller('CooksController',['$scope','$location','$http','Parse_Headers','AllUsersFactory','$cookieStore','$cookies', '$route',
    function($scope,$location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies, $route){

      var baseUrl = 'https://api.parse.com/1/';
      var user = $cookieStore.get('activeUser');

      var User_Headers = {
        headers:{
        "X-Parse-Application-Id" : "JOXuzVvxYQHqMZwmbjp3tSE8eJT7jdYhyLL6oMuo",
        "X-Parse-REST-API-Key" : "uBxYWP3vS8tRCgHT2l2OI0jIf7TawGZCU6quXWTV",
        'X-Parse-Session-Token': user.sessionToken,
        "Content-Type" : "application/json"
      }
    };




      $http.get(baseUrl + 'users/' + user.objectId, Parse_Headers).success(function(data){
        $scope.userInfo = data;
      });

      $http.get(baseUrl + 'classes/dishClass/', Parse_Headers).success(function(data){
        console.log(data.results);
        var allDishes = data.results;
          $scope.dishes = _.where(allDishes,{userId: user.objectId});
      });

      $scope.newDish = function(dish){
        var userId = {};
        userId[user.objectId] = {
          'read': true,
          'write': true
          };
          dish.ACL = $.extend(userId, { '*': {'read' : true}});
          dish.userId = user.objectId;
          dish.owner = user.username;
          $http.post(baseUrl +"classes/dishClass", dish, Parse_Headers)
          .success(function (){
            $location.path('/cookProfile');
            console.log('dish Added');
          });
        };

        $scope.deleteDish = function(dish){
          $http.delete(baseUrl + "classes/dishClass/" + dish, User_Headers).success(function(){
            $route.reload();
          });

        };

        $scope.userLogOut = function(user){
          AllUsersFactory.userLogOut(user);
        };



    }]);
}());
