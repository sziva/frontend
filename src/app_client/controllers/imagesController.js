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

        // DO TUKI!!!!


        vm.openImage = function(image) {
            vm.currentImage = image;
            
            $('#showImageModal').modal("show");
            // vm.showImageInfo();
        }

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

        // vm.deleteTodo = function() {
    //           todoService.deleteTodo(vm.idUser, vm.currentTodo).then(
    //               function success(response) {
    //                   vm.message = "Uspešno izbrisana slika.";
    //                   Swal.fire({
    //                       text: vm.message,
    //                       type: 'success',
    //                       showConfirmButton: false,
    //                       timer: 1000
    //                   });
    //                   vm.closeDelete();
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
    //           vm.currentContainer.fadeOut(300, function() { $(this).remove(); });
        // }
    //       vm.showTodoList();

    //       vm.newTodoAdd = function(){
    //           vm.inputError = "";
    //           $('#newTodoModal').modal("show");
    //       }

    //       vm.closeNew = function(){
    //           $('#newTodoModal').modal("hide");
    //       }

    //       vm.openUpdateTodo = function(currentTodo){
    //           vm.currentTodo = currentTodo;
    //           vm.tmp.description = currentTodo.description;
    //           $('#updateTodoModal').modal("show");
    //       }

    //       vm.closeUpdate = function(){
    //           var obj = $filter('filter')(vm.todoList, {_id: vm.currentTodo._id}, true)[0];
    //           obj.description = vm.tmp.description;
    //           $('#updateTodoModal').modal("hide");
    //       }

    //       vm.openDeleteTodo = function($event, currentTodo){
    //           vm.currentTodo = currentTodo;
    //           vm.currentContainer = $($event.currentTarget).closest('.todo-list');
    //           $('#deleteTodoModal').modal("show");
    //       }

    //       vm.closeDelete = function(){
    //           $('#deleteTodoModal').modal("hide");
    //       }
    }

    imagesController.$inject = ['$route', 'imagesService'];

    angular
        .module('photogram')
        .controller('imagesController', imagesController);

})();