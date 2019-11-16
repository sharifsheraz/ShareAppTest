var routing = function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("start",
        {
            url: "/",
            views: {
                'Main': {
                    templateUrl: "ShapeApp/LogInSignUp"
                }
            }
        });

    $stateProvider.state("profile",
        {
            url: "/profile",
            views: {
                'Main': {
                    templateUrl: "ShapeApp/Profile"
                }
            }
        });

    $urlRouterProvider.otherwise("/");
};

routing.$inject = ["$stateProvider", "$urlRouterProvider"];