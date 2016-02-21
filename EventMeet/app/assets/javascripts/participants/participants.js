angular.module('EventMeet')
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