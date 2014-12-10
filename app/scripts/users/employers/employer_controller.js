(function(){
  angular.module('CookForMe')
    .controller('EmployerController',['$scope','$location','$http','Parse_Headers','AllUsersFactory', '$routeParams','$filter',
    function($scope, $location, $http, Parse_Headers, AllUsersFactory, $routeParams, $filter){

      var baseUrl = 'https://api.parse.com/1/';

      var params = '?where={"type":"chef"}';
      $http.get(baseUrl + 'users/' + params, Parse_Headers).success(function(data){
        $scope.cooks = data.results;
        var cookArray =data.results;
        cookArray.forEach(function(x){
          console.log(x);
          $scope.cookItem = x;
        })
      });

      // $scope.filterUser= function(){
      //   $filter('filter')($scope.cooks, $scope.cookItem.username);
      //
      // }








    }
  ]);
}());
