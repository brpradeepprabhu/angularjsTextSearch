angular.module("textSearchApp", ['ngRoute']).config(function ($compileProvider, $routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partial/home.html",
            controller: "textSearchController",
            controllerAs: "tsrchCtrl"
        }).otherwise({
            redirectTo: '/'
        });
    $compileProvider.debugInfoEnabled(false);


});