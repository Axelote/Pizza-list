var pizzaList = angular.module('pizzaList', [])
.controller('pizzaController', function modalController($scope, pizzaService) {
	$scope.pizza=pizzaService.pizza;
})