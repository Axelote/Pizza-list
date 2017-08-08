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
        when('/history', {
          template: '<history></history>'
        }).
        otherwise('/main');
    }
  ])
  app.factory('pizzaService', function(){
    return{
        pizza:{
          pizzas: [
            {
              name: 'Margarita',
              ingredients: ['basil', 'tomato', 'mozzarella'],
              price: 5.75,
              //date: new Date(),
            },
            {
              name: 'Peperoni',
              ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
              price: 7.00,
              //date: new Date(),
            },
            {
              name: 'Meat',
              ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'],
              price: 12.00,
              //date: new Date(),
            },
            {
              name: 'Marina',
              ingredients: ['shrimp', 'parmejano', 'tuna', 'garlic'],
              price: 15.75,
              //date: new Date(),
            }
          ],
          pizzasAdded: [],
          pizzaBought: [],
        }
    }
  })
  .controller('pizzaController', function modalController($scope, pizzaService, $timeout) {
    $scope.showModal = !$scope.showModal;
    $scope.pizza = pizzaService.pizza;
    //$scope.today = new Date();

    $scope.showModalEvent = function() {
      $scope.showModal = !$scope.showModal;
      $scope.timeInMs = 0;
      var closeModalEvent = function() {
        $scope.timeInMs+= 1000;
        $scope.showModal = ! $scope.showModal
      }
      $timeout(closeModalEvent, 1000);
    };
    $scope.addToCart = function(pizza) {
      $scope.pizza.pizzasAdded.push(pizza);
    };
    $scope.deleteFromCart = function(pizza) { 
      var index = $scope.pizza.pizzasAdded.indexOf(pizza);
      $scope.pizza.pizzasAdded.splice(index, 1);
    };
    $scope.confirmOrder = function(pizza) {
      $scope.pizza.pizzaBought.push(pizza);
    };
    $scope.addData = function() {
      var today = 0;
      today = new Date();
      return today;
    };
    $scope.total = function() {
      var total = 0;
      angular.forEach($scope.pizza.pizzasAdded, function(pizza) {
        total += pizza.price;
      })
      return total;
    };
  })
  .controller('badgeQuantity', function ($scope, pizzaService) {
    $scope.pizza = pizzaService.pizza;
    $scope.cartQuantity = function() {
      quantity = 0;
      quantity = $scope.pizza.pizzasAdded.length;
      return quantity;
    }
    $scope.historyQuantity = function() {
      quantity = 0;
      quantity = $scope.pizza.pizzaBought.length;
      return quantity;
    }
  })
  .controller('toggleMenu', function ($scope, $location) {
    $scope.isActive = function (path) {
       return $location.path() === path;
    }
  })