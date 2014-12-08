(function(){
  angular.module('CookForMe')
    .controller('SingleCookController',['$scope','$location','$http','Parse_Headers','AllUsersFactory', '$routeParams','$cookieStore','$cookies',
    function($scope, $location, $http, Parse_Headers, AllUsersFactory, $routeParams, $cookieStore, $cookies){

      var baseUrl = 'https://api.parse.com/1/';


      $http.get(baseUrl + 'users/' + $routeParams.cid, Parse_Headers).success(function(data){
        $scope.singleCook = data;
        console.log($scope.singleCook);
      });

      $http.get(baseUrl + 'classes/dishClass/', Parse_Headers).success(function(data){
        console.log(data.results);
        var allDishes = data.results;
        $scope.dishes = _.where(allDishes,{userId: $routeParams.cid});
        $scope.apps = _.where(allDishes,{userId: $routeParams.cid, course:'appetizer'});
        $scope.entres = _.where(allDishes,{userId: $routeParams.cid, course:'entre'});
        $scope.desserts = _.where(allDishes,{userId: $routeParams.cid, course:'dessert'});

      });

      $scope.toList = function(dish){
        var user = $cookieStore.get('activeUser');
        var userId = {};
        userId[user.objectId] = {
          'read': true,
          'write': true
        };
        dish.ACL = $.extend(userId, { '*': {'read' : true}});
        dish.userId = user.objectId;
        dish.owner = user.username;
        $http.post(baseUrl +"classes/wishList/", dish, Parse_Headers)
        .success(function (){
          // $location.path('/cookProfile');
          // console.log('dish Added');
        });
      }

  }
  ]);
}());
