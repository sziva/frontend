(function() {
    var images = function($http) {

        // var putComment = function() {
        //     return $http.put('http://localhost/....');
        // };

        // var deleteComment = function() {
        //     return $http.delete('http://localhost/...');
        // };

        var getImages = function() {
            // DEJ URL OD MIKROSTORITVE
            return $http.get('http://localhost/asd');
        }

        var postImage = function(){
            return $http.post('http://localhost/....');
        }

        var getComments = function(){
            return $http.get('http://localhost/....');
        }

        var postComment = function(){
             return $http.post('http://localhost/....');
        }

        var getLikes = function(){
             return $http.get('http://localhost/....');
        }

        var putLike = function(){
             return $http.put('http://localhost/....');
        }
        
        return {
            getImages: getImages,
            postImage: postImage,
            getComments: getComments,
            postComment: postComment,
            getLikes: getLikes,
            putLike:putLike
        }
    };

    images.$inject = ['$http'];

    angular
        .module('photogram')
        .service('imagesService', images);
})();