(function(){
  angular.module('CookForMe')
    .controller('EditDishController',['$scope','$location','$http','Parse_Headers','AllUsersFactory','$cookieStore','$cookies', '$routeParams',
    function($scope,$location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies, $routeParams){

      var user = $cookieStore.get('activeUser');
      console.log(user);
      var baseUrl = 'https://api.parse.com/1/';
      $http.get(baseUrl + 'classes/dishClass/' + $routeParams.did, Parse_Headers).success(function(data){
        console.log(data);
        $scope.dish = data;
      });

      $scope.edit = function(dish){
        $http.put(baseUrl + "classes/dishClass/" + $routeParams.did, dish ,Parse_Headers).success(function(){
          $location.path('/cookProfile')
        });
      }

    }
  ]);
}());
