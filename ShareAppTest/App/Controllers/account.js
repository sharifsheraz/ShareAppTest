shapeApp.controller("account", ["$rootScope", "$scope", "$state", "$window", "datafactory","shapeappservice",
    function ($rootScope, $scope, $state, $window, datafactory,shapeappservice) {
    $scope.user = {};
    $scope.signInSignUpPromise = null;
    $scope.errorMessage = "";
    $scope.signInFailed = false;
    $scope.signUpFailed = false;
    $scope.isSignUp = false;


    var validatePassword = function () {
        if ($scope.user.password !== $scope.user.confirmPassword) {
            $scope.errorMessage = "Password doesn't match";
            return false;
        }
        return true;
    }
    // Sign up
    $scope.signUp = function () {
        if (!validatePassword()) {
            $scope.signUpFailed = true;
            return;
        }
        $scope.signInSignUpPromise = shapeappservice.registerUser($scope.user.email, $scope.user.password, $scope.user.confirmPassword)
            .then(function(response) {
                $scope.signInSignUpPromise = null;
                $scope.$apply();
                $scope.goToProfile();
                
            }, function (response) {
                    $scope.errorMessage = response;
                    $scope.signUpFailed = true;
                    $scope.signInSignUpPromise = null;
                    $scope.$apply();
            });


    };

    // Login
    $scope.login = function () {
        $scope.signInFailed = false;
        $scope.signInSignUpPromise = shapeappservice.login($scope.user.email, $scope.user.password)
            .then(function(response) {
                $scope.signInSignUpPromise = null;
                $scope.$apply();
                $scope.datafactory.user = response.user;
            }, function(response) {
                $scope.signInSignUpPromise = null;
                    $scope.$apply();
                    $scope.errorMessage = "Request Failed";
            });
    };
    $scope.goToProfile = function () {
        $state.go("profile");
    };
    $scope.signOut = function () {
        //shapeappfactory.resetDataFactory();
    };

}]);