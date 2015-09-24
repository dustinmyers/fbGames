(function () {
    "use strict";
    
    angular.module('fbApp').service('authService', authService);

    authService.$inject = ['$rootScope'];
    
    function authService(rootScope) {
        
        var me = this;
        
        me.watchLoginChange = function() {
          var _self = this;
          FB.Event.subscribe('auth.authResponseChange', function(res) {
            if (res.status === 'connected') {
              _self.getUserInfo();
            } 
            else {
               
            }
          });
        };
        
        me.getUserInfo = function() {
          var _self = this;
          FB.api('/me', function(res) {
            console.log("getUserInfo res: ", res);
            rootScope.$apply(function() { 
              rootScope.user = _self.user = res; 
            });
          });
        };
        
        me.logout = function() {
          var _self = this;
          FB.logout(function(response) {
            $rootScope.$apply(function() { 
              $rootScope.user = _self.user = {}; 
            }); 
          });
        };
    } 
        
} ());