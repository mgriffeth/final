(function(){
  angular.module('CookForMe')
    .controller('GuestController',['$scope','GuestFactory', function($scope, GuestFactory){


        scope.newUser = function(user){
          GuestFactory.newUser(user);
        };






    }]);
}());
