angular.module('EventMeet', ['ui.router'])
.factory('participants', [function(){
  // service body
  var o = {
    participants: [
    'participant 1',
    'participant 2',
    'participant 3',
    'participant 4',
    'participant 5'
    ]
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'participants',
function($scope, participants){
  $scope.participants = participants.participants;
}])
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
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
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('participants', {
      url: '/participants/{id}',
      templateUrl: '/participants.html',
      controller: 'PostsCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);
