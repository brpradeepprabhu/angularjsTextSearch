/**
@ngdoc object
@name textSearchApp
@description A App which we can filter the data from an json and the result are in alphabetical order
**/
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