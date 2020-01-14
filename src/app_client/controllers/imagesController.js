(function() {

    function imagesController($route, imagesService) {
        var vm = this;

         vm.images = [];
         vm.currentImage = {};
         vm.comments = [];
         vm.currentLike = {};

         vm.getImages = function() {
             imagesService.getImages().then(
                 function success(response) {
                     vm.images = response.data;
                 }, function error(response) {
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

         vm.getImages();

         vm.newImage = function(image){
              vm.currentImage = image;
              imagesService.postImage().then(
                 function success(response) {
                      vm.message = "Uspešno objavljen komentar.";
                      Swal.fire({
                          text: vm.message,
                          type: 'success',
                          showConfirmButton: false,
                          timer: 1000
                      });
                      vm.images.push(response);
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
              )
          }

         vm.showImage = function(image) {
             vm.currentImage = image;
             imagesService.getDetails(vm.currentImage).then(
                function success(response) {
                    vm.currentLike = response.data.like;
                    vm.comments = response.data.comments;
                }, function error(response) {
                    vm.message = "Prišlo je do napake!";
                    Swal.fire({
                        text: vm.message,
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
             )
             $('#showImageCommentModal').modal("show");
         }

         vm.newComment = function(image){
             vm.currentImage = image;
             imagesService.postComment(vm.currentImage.id, vm.comment).then(
                function success(response) {
                     vm.message = "Uspešno objavljen komentar.";
                     Swal.fire({
                         text: vm.message,
                         type: 'success',
                         showConfirmButton: false,
                         timer: 1000
                     });
//                     vm.showImage(); //če hočeš več requestov
                     vm.comments.push(response);
                } , function error(response) {
                     vm.message = "Prišlo je do napake!";
                     Swal.fire({
                         text: vm.message,
                         type: 'error',
                         showConfirmButton: false,
                         timer: 1000
                     });
                }
             )
         }

        vm.updateLike = function(image){
            vm.currentImage = image;
            imagesService.putLike(vm.currentImage.id).then(
                function success(response) {
                    vm.message = "Like je zabeležen.";
                    Swal.fire({
                        text: vm.message,
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    vm.currentLike = vm.currentLike + 1;
                }, function error(response) {
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

        vm.closeNew = function(){
            $('#showImageModal').modal("hide");
        }
    }

    imagesController.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('imagesController', imagesController);

})();