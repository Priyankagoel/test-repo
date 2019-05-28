var app = angular.module("stackOverflow", ['angular.filter']);
app.config(['$interpolateProvider', function($interpolateProvider ,$locationProvider) {
    $interpolateProvider.startSymbol('{{');
    $interpolateProvider.endSymbol('}}');
}])

app.controller('dashboardController',["$scope", "$http", function($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/v1/question' 
      }).then(function successCallback(response) {
          $scope.questions = response.data.question;
          
         
        }, function errorCallback(response) {
         
      })

}
])
