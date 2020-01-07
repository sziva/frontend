(function() {
	function nastavitev($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'imagesController',
				controllerAs: 'vm',
			})
	}
	
	angular.module('photogram', ['ngRoute'])
		   .config(['$routeProvider', '$locationProvider', nastavitev])
		   .run();
})();