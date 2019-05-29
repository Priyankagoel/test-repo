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

    $http({
      method: 'GET',
      url: '/api/v1/answer' 
    }).then(function successCallback(response) {
        $scope.answers = response.data.answer;
        
        
      }, function errorCallback(response) {
        
    })
}
]),

app.controller('addQueController',["$scope", "$http", function($scope, $http) {

  $scope.question = {};
  $scope.answer = {};
  $scope.show = false;

  $scope.addQuestion = function(){
    $scope.show = true;
    $http({
        method: 'POST',
        url: '/api/v1/question',
        data: $scope.question


      }).then(function successCallback(response) {
            console.log("response",response.data.result);
          
        
        }, function errorCallback(response) {
        
      })
  }

  $scope.addAnswer = function(){
    $http({
      method: 'POST',
      url: '/api/v1/answer',
      data: $scope.answer


    }).then(function successCallback(response) {
          console.log("response",response.data.result);
        
        
      }, function errorCallback(response) {
        
    })  
  }
}
])
