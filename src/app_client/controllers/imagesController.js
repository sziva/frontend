(function() {

    function imagesController($route, imagesService) {
        var vm = this;

        vm.currentImage = {}

        vm.images = [
            {
                id: 1,
                url: 'http://www.skuner.si/wp-content/uploads/2015/02/umetniske0062.jpg',
                like: [
                    {
                        id: 1,
                        like: 1
                    }
                ],
                comment: [
                    {
                        id: 1,
                        comment: 'Odlićna fotografija'
                    }
                ]
            },
            {
                id: 2,
                url: 'http://www.osnovnasolasostro.si/ucenci/13-14/9a_Perkovic_Luka/www/slike/VESOLJE3.jpg',
                like: [
                    {
                        id: 1,
                        like: 100
                    }
                ]
            },
            {
                id: 3,
                url: 'https://vesolje.net/navtika/novice/2009/02/ngc2818.jpg',
                like:[
                    {
                        id: 1,
                        like: 78
                    }
                ],
                comment: [
                    {
                        id: 1,
                        comment: 'Odlićna fotografija RES'
                    },
                    {
                        id: 2,
                        comment: 'Odlićna fotografija'
                    },
                    {
                        id: 3,
                        comment: 'Vesolje'
                    }
                ]
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

        // vm.newComment = function(){
        //     var error = false;
        //     vm.inputError = "";
        //     vm.formError = "";

        //     if(!vm.todo.description){
        //         vm.inputError = "Dodaj komentar!";
        //         error = true;
        //     }

        //     if (error) {
        //         vm.formError = "Komentar ni vnešen!";
        //         return false;
        //     } else {
        //         vm.createComment();
        //     }
        // }

        // vm.createComment = function() {
        //     vm.image.insertion_date = new Date();
        //     imagesService.postComment(vm.id, vm.text).then(
        //         function success(response) {
        //             vm.message = "Uspešno objavljen komentar.";
        //             Swal.fire({
        //                 text: vm.message,
        //                 type: 'success',
        //                 showConfirmButton: false,
        //                 timer: 1000
        //             });
        //             vm.showComments();
        //             vm.comments = {};
        //             vm.commentsList.push(response);
        //             vm.closeNew();
        //         } , function error(response) {
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
       
        vm.showComment = function(comment){
            vm.currentImage.comment = comment;
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

        vm.showLike = function(like){
            vm.currentImage.like = like;
            $('#showImageCommentModal').modal("show");
        }

        // vm.updateLike = function(){
        //   imagesService.putLike(vm.id, vm.like).then(
        //       function success(response) {
        //           vm.message = "Like je zabeležen.";
        //           Swal.fire({
        //               text: vm.message,
        //               type: 'success',
        //               showConfirmButton: false,
        //               timer: 1000
        //           });
        //           vm.closeNew();
        //           vm.showLike();
        //           vm.currentLike = like + 1;
        //       }, function error(response) {
        //           vm.message = "Prišlo je do napake!";
        //           Swal.fire({
        //               text: vm.message,
        //               type: 'error',
        //               showConfirmButton: false,
        //               timer: 1000
        //           });
        //       }
        //   );
        // }    

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


        

    }

    imagesController.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('imagesController', imagesController);

})();