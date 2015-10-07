angular.module('madiTask', [])
  .controller('TaskCtrl', ['$http', '$scope', function($http, $scope){
    $scope.tasks = [];
    $scope.addTask = function(){
      $scope.tasks.push({info: $scope.info, complete: false})
      $scope.newTask.$setPristine();
    };
    $scope.checkOff = function(task) {
        task.complete = true;
      };
    $scope.clearCompleted = function(){
      $scope.tasks = $scope.tasks.filter(function(task){
      return !task.complete
    })
  };
    // $http.get('/').success(function(data){
    //   $scope.tasks = data.json
    // })
  }])
