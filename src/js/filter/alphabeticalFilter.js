angular.module("textSearchApp").filter('alphabetical', function () {
    "use strict";    return function (result) {
        if (typeof (result) !== "undefined") {
            result.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        }
        return result;
    };
});