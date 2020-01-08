(function() {

    function imagesController($route, imagesService) {
        var vm = this;

        vm.currentImage = {}

        vm.images = [
            {
                id: 1,
                url: 'http://www.skuner.si/wp-content/uploads/2015/02/umetniske0062.jpg'
            },
            {
                id: 2,
                url: 'http://www.osnovnasolasostro.si/ucenci/13-14/9a_Perkovic_Luka/www/slike/VESOLJE3.jpg'
            },
            {
                id: 3,
                url: 'https://vesolje.net/navtika/novice/2009/02/ngc2818.jpg'
            }
        ];

        vm.comments = [
            {
                id: 1,
                id_image: 1,
                comment: 'Odlićna fotografija'
            },
            {
                id: 2,
                id_image: 1,
                comment: 'Odlićna fotografija je zelo lepa'       
            },
            {
                id: 3,
                id_image: 2,
                comment: 'Tudi jaz imam jadernico'
            }
        ];
        
        // ODKOMENTIRI!!!!
        // vm.images = {}
        // vm.getImages = function() {
        //     imagesService.getImages().then(
        //         function success(response) {
        //             vm.images = response.data;
        //         }, function error(response) {
        //             vm.message = "Prišlo je do napake!";
        //             Swal.fire({
        //                 text: vm.message,
        //                 type: 'error',
        //                 showConfirmButton: false,
        //                 timer: 1000
        //             });
        //         }
        //     );
        // }

        // vm.getImages();

        vm.newComment = function(){
            var error = false;
            vm.inputError = "";
            vm.formError = "";

            if(!vm.todo.description){
                vm.inputError = "Dodaj komentar!";
                error = true;
            }

            if (error) {
                vm.formError = "Komentar ni vnešen!";
                return false;
            } else {
                vm.createComment();
            }
        }

        vm.createComment = function() {
            vm.image.insertion_date = new Date();
            imagesService.postComment(vm.id, vm.text).then(
                function success(response) {
                    vm.message = "Uspešno objavljen komentar.";
                    Swal.fire({
                        text: vm.message,
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    vm.showComments();
                    vm.comments = {};
                    vm.commentsList.push(response);
                    vm.closeNew();
                } , function error(response) {
                    vm.message = "Prišlo je do napake!";
                    Swal.fire({
                        text: vm.message,
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            );  
        }
       
        vm.showComment = function(comment){
            vm.currentComment = comment;
            $('#showImageCommentModal').modal("show");
        }

        vm.openImage = function(image) {
            vm.currentImage = image;
            $('#showImageCommentModal').modal("show");
            // vm.showImageInfo();
        }

        vm.newCommentAdd = function(){
            vm.inputError = "";
            $('#showImageCommentModal').modal("show");
        }

        vm.closeNew = function(){
            $('#showImageModal').modal("hide");
        }

         // vm.showComments = function(){
        //     $('#showImageModal').modal("show");
        //     imagesService.getComments().then(
        //         function success(response) {
        //             dm.message = response.data.length > 0 ? "" : "Ne najdem virov.";
        //             dm.events = response.data;
        //         }, function error(response) {
        //             dm.message = "Prišlo je do napake!";
        //         }
        //     );
        // }

        // vm.showImageInfo = function() {
        //     $('#updateTodoModal').modal("show");
        // }

        // vm.showTodoList = function(){
    //           todoService.getTodoList(vm.idUser).then(
    //               function success(response) {
    //                   vm.todoList = response.data;
    //               }, function error(response) {
    //                   vm.message = "Prišlo je do napake!";
    //                   Swal.fire({
    //                       text: vm.message,
    //                       type: 'error',
    //                       showConfirmButton: false,
    //                       timer: 1000
    //                   });
    //               }
    //           );
    //       }

    //      vm.updateTodo = function(){
    //           vm.currentTodo.insertion_date = new Date();
    //           todoService.putTodo(vm.idUser, vm.currentTodo).then(
    //               function success(response) {
    //                   vm.message = "Uspešno posodobljen opis.";
    //                   Swal.fire({
    //                       text: vm.message,
    //                       type: 'success',
    //                       showConfirmButton: false,
    //                       timer: 1000
    //                   });
    //                   vm.closeUpdate();
    //                   vm.showTodoList();
    //                   vm.currentTodo = {};
    //               }, function error(response) {
    //                   vm.message = "Prišlo je do napake!";
    //                   Swal.fire({
    //                       text: vm.message,
    //                       type: 'error',
    //                       showConfirmButton: false,
    //                       timer: 1000
    //                   });
    //               }
    //           );
    //       }       

    //       vm.newTodo = function(){
    //           var error = false;
    //           vm.inputError = "";
    //           vm.formError = "";

    //           if(!vm.todo.description){
    //               vm.inputError = "Vnesite opis!";
    //               error = true;
    //           }

    //           if (error) {
    //               vm.formError = "Vpis ni vnešen!";

    //               return false;
    //           } else {
    //               vm.createTodo();
    //           }
    //       }

    //       vm.createTodo = function() {
    //           vm.todo.insertion_date = new Date();
    //           todoService.postTodo(vm.idUser, vm.todo).then(
    //               function success(response) {
    //                   vm.message = "Uspešno naložena slika.";
    //                   Swal.fire({
    //                       text: vm.message,
    //                       type: 'success',
    //                       showConfirmButton: false,
    //                       timer: 1000
    //                   });
    //                   vm.showTodoList();
    //                   vm.todo = {};
    //                   vm.todoList.push(response);
    //                   vm.closeNew();
    //               }, function error(response) {
    //                   vm.message = "Prišlo je do napake!";
    //                   Swal.fire({
    //                       text: vm.message,
    //                       type: 'error',
    //                       showConfirmButton: false,
    //                       timer: 1000
    //                   });
    //               }
    //           );  
    //       }

        

    }

    imagesController.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('imagesController', imagesController);

})();