angular.module('starter.services', [])

/*注入自定义常量和 $http */
.factory('HiSlider',function( SLIDER_API_URL, $http ){
  /*
  [{"id":"1","order":"0","image":"1.jpg","product":"433"},{"id":"2","order":"1","image":"2.jpg","product":"1104"},{"id":"3","order":"2","image":"3.jpg","product":"1263"},{"id":"4","order":"3","image":"4.jpg","product":"1611"}]
   */
  return {
      getHomeSlider: function(callback) {
          return $http.get( SLIDER_API_URL, {}, {
              withCredentials: false
          }).success(callback);
      }
    };

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
