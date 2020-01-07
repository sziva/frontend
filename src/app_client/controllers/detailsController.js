(function() {

    function detailsController($route, imagesService) {
        var dm = this;

        dm.comments = {}
        dm.likes = {}

        dm.newComment = function(){
          var error = false;
          dm.inputError = "";
          dm.formError = "";

          if(!dm.todo.description){
              dm.inputError = "Naložite sliko!";
              error = true;
          }

          if (error) {
              dm.formError = "Slika ni naložena!";

              return false;
          } else {
              dm.createComment();
          }
        }

        dm.getImages();

        dm.createComment = function() {
          dm.image.insertion_date = new Date();
          imagesService.postComment(dm.id, dm.text).then(
              function success(response) {
                  dm.message = "Uspešno naložena slika.";
                  Swal.fire({
                      text: dm.message,
                      type: 'success',
                      showConfirmButton: false,
                      timer: 1000
                  });
                  dm.showCommentList();
                  dm.comments = {};
                  dm.commentsList.push(response);
                  dm.closeNew();
              }, function error(response) {
                  dm.message = "Prišlo je do napake!";
                  Swal.fire({
                      text: dm.message,
                      type: 'error',
                      showConfirmButton: false,
                      timer: 1000
                  });
              }
          );  
        }

        dm.newCommentSdd = function(){
          dm.inputError = "";
          $('#newcatalogModal').modal("show");
        }

        dm.closeNew = function(){
          $('#newcatalogModal').modal("hide");
        }
    }

    detailsController.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('detailsController', detailsController);

})();