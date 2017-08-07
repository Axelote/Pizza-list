var app = angular.
  module('app')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      //$locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cart', {
          template: '<cart-list></cart-list>'
        }).
        when('/main', {
          template: '<pizza-list></pizza-list>'
        }).
        otherwise('/main');
    }
  ])
  .controller('pizzaController', function modalController($scope, pizzaService) {
    $scope.pizzasAdded = [
      {tt: 1},
    ];

    $scope.toggleMenu = function() {
      $scope.active = !$scope.active;
    };
    $scope.showModalEvent = function() {
      $scope.selectedClass = !$scope.selectedClass;
    };
    $scope.addToCart = function() {
      $scope.pizzasAdded.push({tt: 2})
    }

    $scope.closeModalEvent = function() {
      $scope.selectedClass = ! $scope.selectedClass;

    };
    $scope.pizza=pizzaService.pizza;
    // $scope.addToCart = function($index) {
    //   $scope.pizzasAdded.push({name: $scope.pizza.pizzas})
    // }
  })