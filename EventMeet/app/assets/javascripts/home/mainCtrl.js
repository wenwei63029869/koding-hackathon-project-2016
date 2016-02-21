angular.module('EventMeet')
.controller('MainCtrl', [
'$scope',
'participants',
function($scope, participants){
  $scope.participants = participants.participants;
}])