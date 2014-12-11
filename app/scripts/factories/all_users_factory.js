(function(){
  angular.module('CookForMe')
    .factory('AllUsersFactory',['$http','$location','Parse_Headers','$cookieStore','$cookies','$window',
      function ($http, $location, Parse_Headers, $cookieStore, $cookies, $window){

        var baseUrl = 'https://api.parse.com/1/';



        var registerUser = function(user){
          $http.post( 'https://api.parse.com/1/users', user, Parse_Headers ).success(function(){
            $location.path('/')
            return userLogIn(user.username, user.password);
            location.reload();
          });
        };

        var userLogIn = function(username, password){
          var user = '?username='+ username ;
          var pass = '&password='+ password ;
          $http.get('https://api.parse.com/1/login'+ user + pass , Parse_Headers).success(function(data){
            $cookieStore.put('activeUser', data);
            return userCheck() ;
            $location.path('/');
            location.reload();
          });
        };

        var userLogOut = function(user){
          $cookieStore.remove('activeUser');
          $location.path('/');
          return userCheck();

        };


        var userCheck = function(user){
          var user = $cookieStore.get('activeUser');
          console.log(user);
          if(user){
            if(user.type ==="chef"){
              $('#userStatus').html('Logged in as '+ user.username);
              $location.path('/cookProfile/');
              location.reload();
            }else if(user.type === "employer"){
              $('#userStatus').html('Logged in as '+ user.username);
              $location.path('/allcooks');
              location.reload();
          };
        }else{
          $('#userStatus').html('Not logged in...');
          location.reload();
          // $window.reload();
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
