var app = angular.module("stackOverflow", []);
app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{{');
    $interpolateProvider.endSymbol('}}');
}])


// Dashboard Controller
app.controller('dashboardController',["$scope", "$http", "$window", function($scope, $http, $window) {



    $http({
        method: 'GET',
        url: '/api/v1/question' 
      }).then(function successCallback(response) {
          $scope.questions = response.data.questions;
          
         
        }, function errorCallback(response) {
         
      })

    $http({
      method: 'GET',
      url: '/api/v1/answer' 
    }).then(function successCallback(response) {
        $scope.answers = response.data.answer;
        
        
      }, function errorCallback(response) {
        
    })

    //for redirect to add question page
    $scope.addQue = function(){
      $window.location.href = '/add/question';
    }

    // for update the votes
    $scope.incVote = function(answer){
    
          
      $scope.answer = answer;
      $scope.answer.vote++;
      console.log(" $scope.answer", $scope.answer);
          $http({
            method: 'PUT',
            url: '/api/v1/answer',
            data: $scope.answer
      
      
          }).then(function successCallback(response) {
                console.log("response",response.data);
              
              
            }, function errorCallback(response) {
              
          })  
        }

}
])

// app.controller('addQueController',["$scope", "$http", function($scope, $http) {

//   $scope.question = {};
//   $scope.answer = {};
//   // $scope.show = false;

//   $scope.addQuestion = function(){
//     // $scope.show = true;
//     $http({
//         method: 'POST',
//         url: '/api/v1/question',
//         data: $scope.question


//       }).then(function successCallback(response) {
//             console.log("response",response.data.result);
          
        
//         }, function errorCallback(response) {
        
//       })
//   },

//   $scope.addAnswer = function(){
//     $http({
//       method: 'POST',
//       url: '/api/v1/answer',
//       data: $scope.answer


//     }).then(function successCallback(response) {
//           console.log("response",response.data.result);
        
        
//       }, function errorCallback(response) {
        
//     })  
//   },

//   $scope.incVote = function(){
    
//     $scope.answer.vote = $scope.answer.vote + 1;

//     $http({
//       method: 'PUT',
//       url: '/api/v1/answer',
//       data: $scope.answer


//     }).then(function successCallback(response) {
//           console.log("response",response.data.result);
        
        
//       }, function errorCallback(response) {
        
//     })  
//   }
// }
// ])
