(function(){
  angular.module('CookForMe')
    .controller('CooksController',['$scope','$location','$http','Parse_Headers','AllUsersFactory','$cookieStore','$cookies',
    function($scope,$location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies){

      var baseUrl = 'https://api.parse.com/1/';
      var user = $cookieStore.get('activeUser');

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
          $http.delete(baseUrl + "classes/dishClass/" + dish, Parse_Headers);
        };

        $scope.userLogOut = function(user){
          AllUsersFactory.userLogOut(user);
        };



    }]);
}());
