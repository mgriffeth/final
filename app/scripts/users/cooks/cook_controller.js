(function(){
  angular.module('CookForMe')
    .controller('CooksController',['$scope','$location','$http','Parse_Headers','AllUsersFactory','$cookieStore','$cookies',
    function($scope,$location, $http, Parse_Headers, AllUsersFactory, $cookieStore, $cookies){

      var baseUrl = 'https://api.parse.com/1/';
      var user = $cookieStore.get('activeUser');
      $http.get(baseUrl + 'users/' + user.objectId, Parse_Headers).success(function(data){
        $scope.userInfo = data;
      });

      $scope.newDish = function(dish){
        var userId = {};
        userId[user.objectId] = {
          'read': true,
          'write': true
          };
          dish.ACL = $.extend(userId, { '*': {'read' : true}});
          dish.userId = user.objectId;
          dish.owner = user.username;

          $http.post(baseUrl +"classes/dishClass", dish, Parse_Headers)
          .then(function (){
            console.log('dish Added');
          });
        };

        $scope.userLogOut = function(user){
          AllUsersFactory.userLogOut(user);
        };



    }]);
}());