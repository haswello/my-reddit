(function(){
    
    var app = angular.module('myreddit', ['ionic','angularMoment']);

    app.controller('RedditCtrl' ,function($http, $scope){
        
        
        $scope.stories = []; 
        
        
        function loadStories(){
            
             $http.get('https://www.reddit.com/r/news/ads/.json',{params: params})
                .success(function(response){
                    //console.log(response.data.children);
                    angular.forEach(response.data.children, function(child){
                    //console.log(child.data);
                    $scope.stories.push(child.data);
                });
                
                 $scope.$broadcast('scroll.infiniteScrollComplete');
            });
            
            
            
        };
        
        
        $scope.loadOlderStories = function(){
            
            var params = {};
            if($scope.stories.length > 0){
                params['after'] = $scope.stories[$scope.stories.length -1].name;
            }
            $http.get('https://www.reddit.com/r/news/ads/.json',{params: params})
                .success(function(response){
                    //console.log(response.data.children);
                    angular.forEach(response.data.children, function(child){
                    //console.log(child.data);
                    $scope.stories.push(child.data);
                });
                
                 $scope.$broadcast('scroll.infiniteScrollComplete');
            });
            
            
        };
        
        
        $scope.loadNewerStories() = function(){
            
            
            
        };
        
        
        
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


