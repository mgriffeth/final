(function(){
  angular.module('CookForMe')
    .factory('AllUsersFactory',['$http','$location','Parse_Headers','$cookieStore','$cookies',
      function ($http, $location, Parse_Headers, $cookieStore, $cookies){

        var baseUrl = 'https://api.parse.com/1/';



        var registerUser = function(user){
          $http.post( 'https://api.parse.com/1/users', user, Parse_Headers ).success(function(){
            $location.path('/');
          });
        };

        var userLogIn = function(username, password){
          var user = '?username='+ username ;
          var pass = '&password='+ password ;
          $http.get('https://api.parse.com/1/login'+ user + pass , Parse_Headers).success(function(data){
            $cookieStore.put('activeUser', data);
            return userCheck() ;
            $location.path('/');
          });
        };

        var userLogOut = function(user){
          $cookiesStore.remove('activeUser')
        }


        var userCheck = function(user){
          var user = $cookieStore.get('activeUser');
          console.log(user);
          if(user.type ==="cook"){
            $location.path('/');
            $('#userStatus').html('Logged in as '+ user.username);
          }else if(user.type === "employer"){
            $location.path('/');
            $('#userStatus').html('Logged in as '+ user.username);
          }else{
            $('#userStatus').html('You are not logged in.');
          };
        };


      return{
        registerUser: registerUser,
        userLogIn: userLogIn,
        userCheck: userCheck,
        userLogOut: userLogOut
      }


      }
    ]);
}());
