'use strict';
angular.module('Wakaw').controller('LoginCtrl', ['$scope', 'LxDialogService','LoginService','responseService','LxNotificationService', function($scope, LxDialogService,LoginService, responseService, LxNotificationService) {
    $scope.init = function() {
        $scope.newUser = false;
        if (this.textFields) {
            for (var i in this.textFields) {
                delete this.textFields[i];
            }
        } else {
            this.textFields = {};
        }
    };    

    $scope.dialogClose = function() {
        this.init();
        LxDialogService.close($scope.lxDialogElement[0].id);
    };
    $scope.dialogLogin = function() {
        var login = responseService.postData(($scope.newUser === true)?'signup':'login',this.textFields);
        login.then(function(response){
            if(response._id){
                LoginService.setLoggedIn(response.userName, response.email);
                $scope.dialogClose();
            }else{
                LxNotificationService.error(response.message);
            }
        });        
    };
   
    $scope.init();
}]);