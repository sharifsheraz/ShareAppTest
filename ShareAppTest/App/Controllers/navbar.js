shapeApp.controller("navbar", ["$scope", "$state", "datafactory", function($scope, $state, datafactory) {

    $scope.goToProfile = function () {
        $state.go("profile");
    }
}]);