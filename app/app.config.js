angular.
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
  ]);
