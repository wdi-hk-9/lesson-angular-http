angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', ['$scope', '$http', function PresidentsController($scope, $http){
  $scope.all = [
    {name: 'George Washington', start: 1789, end: 1797 },
    {name: 'John Adams', start: 1797, end: 1801 },
    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
    {name: 'James Madison', start: 1809, end: 1817 }
  ];

  $scope.newPresident = {};
  $scope.addPresident = addPresident;
  $scope.getPresidents = getPresidents;
  $scope.deletePresident = deletePresident;

  getPresidents();
  function getPresidents(){
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response){
        $scope.all = response.data.presidents;
    });
  }

  function addPresident(){
    $http
      .post('http://localhost:3000/presidents', $scope.newPresident)
      .then(function(response){
        getPresidents();
    });
    $scope.newPresident = {};
  }

  function deletePresident(president){
    $http
      .delete("http://localhost:3000/presidents/" + president._id)
      .then(function(response){
        var index = $scope.all.indexOf(president);
        $scope.all.splice(index, 1);
      });
  }
}]);
