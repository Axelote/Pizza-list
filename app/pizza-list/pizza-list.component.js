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
