angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', ['$scope', '$http', function PresidentsController($scope, $http){
  $scope.all = [];

  $scope.newPresident = {};
  $scope.editPresident = {};
  $scope.addPresident = addPresident;
  $scope.deletePresident = deletePresident;
  $scope.showPresident = showPresident;

  function showPresident(president) {
    $scope.editPresident = president;
  }

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

  function deletePresident(id){
    $http
      .delete('http://localhost:3000/presidents/' + id)
      .success(function(){
        getPresidents();
      });
  }
}]);
