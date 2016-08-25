angular.module("textSearchApp").filter('alphabetical', function () {
    "use strict";
   /**
    
    * @ngdoc filter
    * @name  textSearchApp.filter:alphabetical filter
    * @description To filter the list of data in alphabetical order    *
    * @param {Array} result - An Array which we want to filter in alphabetical order
    * @returns {Object}  ordered in alphabetical order
    */
    var alphabeticalFilter = function (result) {
        if (typeof (result) !== "undefined") {
            result.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }
        return result;
    };
    return alphabeticalFilter;
});
