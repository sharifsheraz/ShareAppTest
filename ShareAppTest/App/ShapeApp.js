

////////////////////////////////
// Define AngularJS application
////////////////////////////////

var shapeApp = angular.module("shapeApp", ["ui.router", "cgBusy"]);
shapeApp.config(routing);
//redirect to homepage on start
shapeApp.run(["$rootScope", "$state","datafactory", function ($rootScope, $state,datafactory) {
   
    $rootScope.currentUser =null;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (fromState.name === '' && toState.name !== 'start') {
            $rootScope.reloaded = true;
            event.preventDefault();
            $state.go("start");
        }
        $rootScope.actualLocation = toState.name;
    });
}]);