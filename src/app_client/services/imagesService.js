(function() {
    var images = function($http) {
        // var getTodo = function(idImage, idUser) {
        //     return $http.get('api/users/' + idUser + '/todo/' + idTodo);
        // };

        // var getTodoList = function(idUser) {
        //     return $http.get('api/users/' + idUser + '/todo');
        // };

        // var postTodo = function(idUser, todo) {
        //     return $http.post('api/users/' + idUser + '/todo/', todo);
        // };

        // var putTodo = function(idUser, todo) {
        //     return $http.put('api/users/' + idUser + '/todo/' + todo._id, todo);
        // };

        // var deleteTodo = function(idUser, todo) {
        //     return $http.delete('api/users/' + idUser + '/todo/' + todo._id, todo);
        // };

        var getImages = function() {
            // DEJ URL OD MIKROSTORITVE
            return $http.get('http://localhost/asd');
        }

        var postImage = function(){
            return $http.post('http://localhost/....');
        }
        return {
            getImages: getImages,
            // getTodo: getTodo,
            // getTodoList: getTodoList,
            postImage: postImage
            // putTodo: putTodo,
            // deleteTodo: deleteTodo
        }
    };

    images.$inject = ['$http'];

    angular
        .module('photogram')
        .service('imagesService', images);
})();