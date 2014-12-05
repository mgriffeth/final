(function(){
  angular.module('CookForMe')
    .controller('EmployerController',['$scope','$location','$http','Parse_Headers','AllUsersFactory',
    function($scope, $location, $http, Parse_Headers, AllUsersFactory){

      var baseUrl = 'https://api.parse.com/1/';
      var params = '?where={"type":"chef"}';
      $http.get(baseUrl + 'users/' + params, Parse_Headers).success(function(data){
        $scope.cooks = data.results;
        console.log(data.results);
      });

    var selectCook = function(cook){
      var param = '?where={"objectId":"cook"}';
      $http.get(baseUrl + 'users/' + params, Parse_Headers).success(function(data){
        console.log(data.results);
      });
    }


    }
  ]);
}());
