angular.module('starter.filters', [])
/*从服务器获取图片，如果没有获取到图片*/
.filter('serverimage', function(SLIDER_IMG_BASE_URL) {

    return function(image) {
        if (image && image != null) {
          	/*远程*/
           /* return SLIDER_IMG_BASE_URL + image;*/
           /*本地*/
            return 'img/ss/' + image;
        } else {
            return 'img/noimage.png';
        }
    };

})

;