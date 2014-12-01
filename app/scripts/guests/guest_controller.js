(function(){
   angular.module('CookForMe')
    .controller('GuestController',['$scope','$location','$http','Parse_Headers',function($scope, $location, $http, Parse_Headers){
      var usersUrl = 'https://api.parse.com/1/users'

      $scope.registerUser = function(user){
        $http.post( usersUrl, user, Parse_Headers ).success(function(){
          $location.path('/');
        });
      }


  }
  ]);

}());
