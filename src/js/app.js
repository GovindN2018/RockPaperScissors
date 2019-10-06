// angular.module('helloWorldApp', [
//   'ngRoute'
// ])
// .config([
//   '$routeProvider',
//   function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/home.html',
//         controller: 'HomeCtrl'
//       });
//   }
// ]);

angular.module('helloWorldApp', [
  'ngRoute'
])
.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/rock-paper-scissors-js.html',
        //controller: 'HomeCtrl'
      });
  }
]);
