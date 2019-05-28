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
          for(var j=0;j<$scope.questions.length;j++){

            $http({
                method: 'GET',
                url: '/api/v1/answer'
            }).then(function successCallback(response){
                $scope.answers = response.data.answer;

            }function errorCallback(response){


            })
          }
         
        }, function errorCallback(response) {
         
      })

}
])
