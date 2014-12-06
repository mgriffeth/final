(function(){
  angular.module('CookForMe')
    .controller('SingleCookController',['$scope','$location','$http','Parse_Headers','AllUsersFactory', '$routeParams',
    function($scope, $location, $http, Parse_Headers, AllUsersFactory, $routeParams){

      var baseUrl = 'https://api.parse.com/1/';

      $http.get(baseUrl + 'users/' + $routeParams.cid, Parse_Headers).success(function(data){
        $scope.singleCook = data;
        console.log($scope.singleCook);
      });

      $http.get(baseUrl + 'classes/dishClass/', Parse_Headers).success(function(data){
        console.log(data.results);
        var allDishes = data.results;
        $scope.dishes = _.where(allDishes,{userId: $routeParams.cid});
      });

  }
  ]);
}());
