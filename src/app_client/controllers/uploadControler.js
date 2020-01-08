(function() {

    function uploadControler($route, imagesService) {
        var um = this;

        um.image = {}

        um.newImage = function(){
          var error = false;
          um.inputError = "";
          um.formError = "";

          //treba spremeniti
            if(!um.image.description){
              um.inputError = "Naložite sliko!";
              error = true;
            }

            if (error) {
              um.formError = "Slika ni naložena!";

              return false;
            } else {
              um.createImage();
            }
        }

        um.getImages();

        um.createImage = function() {
            um.image.insertion_date = new Date();
            imagesService.postImage(um.id, um.url).then(
                function success(response) {
                    um.message = "Uspešno naložena slika.";
                        Swal.fire({
                            text: um.message,
                            type: 'success',
                            showConfirmButton: false,
                            timer: 1000
                         });
                    um.image = {};
                    um.imageList.push(response);
                    um.closeNew();
                }, function error(response) {
                    um.message = "Prišlo je do napake!";
                    Swal.fire({
                        text: um.message,
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    console.log(response.e);
                    um.closeNew();
                }
            );  
        }

        um.newImageAdd = function(){
          um.inputError = "";
          $('#newImageModel').modal("show");
        }

        um.closeNew = function(){
          $('#newImageModel').modal("hide");
        }
    }

    uploadControler.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('uploadControler', uploadControler);

})();