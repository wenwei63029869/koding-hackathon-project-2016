angular.module('EventMeet', ['ui.router', 'templates'])
.controller('participantsCtrl', [
'$scope',
'$stateParams',
'participants',
function($scope, $stateParams, participants){
  $scope.participant = participants.participants[$stateParams.id]
}])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('participants', {
      url: '/participants/{id}',
      templateUrl: '/participants.html',
      controller: 'PostsCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);
