angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', ['$scope', '$http', function PresidentsController($scope, $http){
  $scope.all = [];

  $scope.newPresident = {};
  $scope.addPresident = addPresident;

  getPresidents();
  function getPresidents(){
    $http
      .get('http://localhost:3000/presidents')
      .success(function(data){
        $scope.all = data.presidents;
      });
  }

  function addPresident(){
    $http
      .post('http://localhost:3000/presidents', $scope.newPresident)
      .success(function(data){
        getPresidents();
      });
    $scope.newPresident = {};
  }
}]);
