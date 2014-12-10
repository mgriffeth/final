(function(){
   angular.module('CookForMe')
    .controller('UserController',['$scope','$location','$http','Parse_Headers','AllUsersFactory',
      function($scope, $location, $http, Parse_Headers, AllUsersFactory){
      var usersUrl = 'https://api.parse.com/1/users';

      $http.get(usersUrl, Parse_Headers).success(function(data){
        console.log(data.results);
        $scope.cooks = data.results;
      })

      $scope.registerUser = function(user){
        AllUsersFactory.registerUser(user);
        };

      $scope.userLogIn = function(username, password){
        AllUsersFactory.userLogIn(username, password);
      };

      $scope.userLogOut = function(user){
        AllUsersFactory.userLogOut(user);
      };


    }
  ]);
}());
