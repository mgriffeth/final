(function(){
  angular.module('CookForMe')
    .controller('EditDishController',['$scope','$location','$http','Parse_Headers','AllUsersFactory','$cookieStore','$cookies', '$routeParams',
    function($scope,$location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies, $routeParams){

      var baseUrl = 'https://api.parse.com/1/';
      $http.get(baseUrl + 'classes/dishClass/' + $routeParams.did, Parse_Headers).success(function(data){
        console.log(data);
        $scope.dish = data;
      })

    }
  ]);
}());
