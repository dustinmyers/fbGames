(function () {
    "use strict";
    
    var app = angular.module("fbApp", [
       "ui.router",
       "ngMaterial",
       "firebase"
    ]);
    
    app.config(ConfigureApplication);
    
    ConfigureApplication.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    
    function ConfigureApplication(stateManager, urlManager, $locationProvider) {
        // default state
        urlManager.otherwise('/login'); 
        
        // application states
        stateManager
            .state('login', {
                url: "/login",
                views: {
                    "content": {
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('dashboard', {
                url: "/dashboard",
                views: {
                    "header": {
                        templateUrl: 'views/header.html',
                    },
                    "content": {
                        templateUrl: 'views/dashboard.html',
                        controller: 'DashCtrl'
                    }
                }
            });
            
    } 
    
    // app.run(FacebookInit);
    
    // FacebookInit.$inject = ['$rootScope', '$window', 'authService'];
    
    // function FacebookInit(rootScope, window, authService) {
    //     rootScope.user = {};
    //     window.fbAsyncInit = function() {
    //         FB.init({
    //             appID: "1708527339377033",
    //             cookies: true,
    //             xfbml: true
    //         });
    //         authService.watchLoginChange();
    //     }
        
    //     (function(d, s, id) {
    //       var js, fjs = d.getElementsByTagName(s)[0];
    //       if (d.getElementById(id)) return;
    //       js = d.createElement(s); js.id = id;
    //       js.src = "//connect.facebook.net/en_US/sdk.js";
    //       fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));
        
    // }
        
} ());