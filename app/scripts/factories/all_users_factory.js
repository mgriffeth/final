(function(){
  angular.module('CookForMe')
    .factory('AllUsersFactory',['$http','$location','Parse_Headers',
      function ($http, $location, Parse_Headers){

        var usersUrl = 'https://api.parse.com/1/users'



        var registerUser = function(user){
          $http.post( 'https://api.parse.com/1/users', user, Parse_Headers ).success(function(){
            $location.path('/');
          });
        };

        var userLogIn = function(username, password){
          var user = '?username='+ username ;
          var pass = '&password='+ password ;
          $http.get('https://api.parse.com/1/login'+ user + pass , Parse_Headers).success(function(data){
          console.log(data.username);

          $location.path('/');
          });

        };


      return{
        registerUser: registerUser,
        userLogIn: userLogIn
      }


      }
    ]);
}());
