(function() {

    function detailsController($route, imagesService) {
        var dm = this;

        dm.comments = [
            {
                id: 1,
                comment: 'Odlićna fotografija'
            },
            {
                id: 2,
                comment: 'Odlićna fotografija je zelo lepa'            },
            {
                id: 3,
                comment: 'Tudi jaz imam jadernico'
            }
        ];
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

        dm.getComments();

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

        // dm.newCommentAdd = function(){
        //   dm.inputError = "";
        //   $('#showImageModal').modal("show");
        // }

       
        dm.showComments = function(){
          $('#showImageModal').modal("show");
          imagesService.getComments().then(
            function success(response) {
                dm.message = response.data.length > 0 ? "" : "Ne najdem virov.";
                dm.events = response.data;
            }, function error(response) {
                dm.message = "Prišlo je do napake!";
            }
          );
        }

        dm.closeNew = function(){
          $('#showImageModal').modal("hide");
        }

    }

    detailsController.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('detailsController', detailsController);
})();