(function () {
    "use strict";
    
    angular.module('fbApp').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$firebaseAuth', '$location'];
    
    function LoginCtrl($scope, $firebaseAuth, $location) {
        
        var ref = new Firebase("https://fb-games.firebaseio.com/");
        var authObj = $firebaseAuth(ref);
        
        $scope.login = function() {
            authObj.$authWithOAuthPopup("facebook", function(error, authData) {
              if (error) {
                console.log("Login Failed!", error);
              } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path('/dashboard')
              }
            }, { scope: "public_profile, email, user_friends" });   
        };
        
    } 
        
} ());