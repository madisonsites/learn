angular.module('toDoz', [])
  .controller('MainCtrl', [
    '$scope',
    function($scope){
      $scope.test= "yo peepz";
      $scope.tasks= [{task: 'task 1', complete: true},
                      {task: 'task 2', complete: false},
                      {task: 'task 3', complete: true}];
      $scope.addTask = function(){
        if(!$scope.title || $scope.title === ''){
          return;
        }
        $scope.tasks.push({task: $scope.title, complete: false, link: $scope.link});
        $scope.title = '';
        $scope.link = '';
      };
      $scope.checkOff = function(task) {
        task.complete = true;
      };
    }
    ])