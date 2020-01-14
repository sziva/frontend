(function() {
    var images = function($http) {

        var getImages = function() {
            return $http.get('http://localhost:8080/v1/catalog-service');
        }

        var postImage = function(){
            return $http.post('http://localhost:8080/v1/upload-service');
        }

        var getDetails = function(id_image){
            return $http.get('http://localhost:8080/v1/details-service?id=' + id_image);
        }

        var postComment = function(id_image, comment){
             return $http.post('http://localhost:8080/v1/comment-service?id=' + id_image, comment);
        }

        var putLike = function(id_image){
             return $http.put('http://localhost:8080/v1/like-sservice?id=' + id_image);
        }
        
        return {
            getImages: getImages,
            postImage: postImage,
            getDetails: getDetails,
            postComment: postComment,
            putLike: putLike
        }
    };

    images.$inject = ['$http'];

    angular
        .module('photogram')
        .service('imagesService', images);
})();