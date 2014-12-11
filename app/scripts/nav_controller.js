(function(){
  angular.module('CookForMe')
    .controller('NavController',['$scope','$location','$http','Parse_Headers','AllUsersFactory', '$cookieStore',"$cookies","$window",
    function($scope, $location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies, $window){

     var user = $cookieStore.get('activeUser');
     $scope.user = user;
    if(user){
      $scope.actUser = user.username;
      $('#userStatus').html('Logged in as '+ user.username);
      $window.reload;
    }else{
      $('#userStatus').html('Not logged in...');
      $window.reload;
    };
    $scope.userLogOut = function(user){
      AllUsersFactory.userLogOut(user);
    };

  }
  ]);
}());
