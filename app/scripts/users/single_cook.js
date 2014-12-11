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
        console.log("apps",$scope.apps);
        $scope.entres = _.where(allDishes,{userId: $routeParams.cid, course:'entre'});
        console.log("entres",$scope.entres);
        $scope.desserts = _.where(allDishes,{userId: $routeParams.cid, course:'dessert'});
        console.log("desserts",$scope.desserts);

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

      $scope.calc = function(dishes){
        var dishes = dishes;
        $scope.total = 0;
        var checked = _.where(dishes, {checked: true});
        // console.log(checked);
        checked.forEach(function(x){
          if (x.quant > 0){
            $scope.total += parseInt(x.pricePP, 10) * parseInt(x.quant, 10);
          }
        });
        console.log($scope.total);
      };

      



  }
  ]);
}());
