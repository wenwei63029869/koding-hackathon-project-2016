angular.module('EventMeet')
.controller('participantsCtrl', [
'$scope',
'$stateParams',
'participants',
function($scope, $stateParams, participants){
  $scope.participant = participants.participants[$stateParams.id]
}])