(function(){
  angular.module('CookForMe')
    .controller('NavController',['$scope','$location','$http','Parse_Headers','AllUsersFactory', '$cookieStore',"$cookies",
    function($scope, $location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies){

     var user = $cookieStore.get('activeUser');
     $scope.user = user;
    if(user){
      $scope.actUser = user.username;
      $('#userStatus').html('Logged in as '+ user.username);
    }else{
      $('#userStatus').html('Not logged in...');
    };

    $scope.userLogOut = function(user){
      AllUsersFactory.userLogOut(user);
    };

  }
  ]);
}());
