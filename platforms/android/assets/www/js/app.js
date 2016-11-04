(function(){
    
    var app = angular.module('myreddit', ['ionic','angularMoment']);

    app.controller('RedditCtrl' ,function($http, $scope){
        
        
        $scope.stories = []; 
        $http.get('https://www.reddit.com/r/news/ads/.json')
        .success(function(response){
            //console.log(response.data.children);
            angular.forEach(response.data.children, function(child){
                //console.log(child.data);
                $scope.stories.push(child.data);
            });
        });
            
    });
    
    
    
    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {

          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })


})();


