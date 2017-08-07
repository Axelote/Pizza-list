angular.
  module('pizzaList').
  component('pizzaList', {
    templateUrl: 'pizza-list/pizza-list.template.html',
    controller: function PizzaListController($scope) {
      $scope.propertyName = 'price';
      $scope.reverse = false;
      
      $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
      };
    }
  })
  pizzaList.factory('pizzaService', function(){
    return{
        pizza:{
          pizzas: [
            {
              number: 1,
              name: 'Margarita',
              ingredients: ['basil', 'tomato', 'mozzarella'],
              price: 5.75
            },
            {
              number: 2,
              name: 'Peperoni',
              ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
              price: 7.00
            },
            {
              number: 3,
              name: 'Meat',
              ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'],
              price: 12.00
            },
            {
              number: 4,
              name: 'Marina',
              ingredients: ['shrimp', 'parmejano', 'tuna', 'garlic'],
              price: 15.75
            }
          ]
        }
    }
  })