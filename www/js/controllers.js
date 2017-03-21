angular.module('starter.controllers', [])



/*
注入自定义服务和一些用得上的东西
$ionicLoading, $location, $ionicSlideBoxDelegate
 */
.controller('DashCtrl', function($scope, HiSlider, $ionicLoading, $location, $ionicSlideBoxDelegate) {


    HiSlider.getHomeSlider(function(data) {
        if (data) {
            $scope.slides = data;
            console.log(data);
            $ionicSlideBoxDelegate.update();
        }
    });


    $scope.goToProduct = function(id) {
        console.log(id);
        /*跳转到特定的屏幕*/
       /* $location.url("/app/product/" + id);*/
    }



})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
