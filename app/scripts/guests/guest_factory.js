(function(){
  angular.module('CookForMe')
    .factory('GuestFactory',[ '$http', '$location', 'ParseHeaders',
      function($http, $location, ParseHeaders){
        var userUrl = 'https://api.parse.com/1/users';

        var newUser = function(user){
          $http.post(userUrl, user, ParseHeaders).success(function(){
            console.log(user);
          });
        };



      return:{
        newUser:newUser
      };

      }])
}())
