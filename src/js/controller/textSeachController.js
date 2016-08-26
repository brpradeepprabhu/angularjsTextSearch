(function () {

    "use strict";
    /**
     * @ngdoc controller
     * @name textSearchApp.controller:textSearchController
     * @Description
     Text search controller get the value from search text model and filter the value from the data array and store it in result array to display in the view
     * @param {Object} $http - http provider of angularjs
     */
    var p, textSearchController = function ($http) {
        var vm = this;
        /**
         * model variable for the searching the text
         *
         * @property searchText
         * @type String
         * @default ""
         */
        vm.searchText = '';
        /**
         * Object to store the JSON
         *
         * @property data
         * @type Array
         * @default "[]"
         */
        vm.data = {};
        /**
         * Object to store all the result
         *
         * @property result
         * @type Array
         * @default "[]"
         */

        vm.result = [];
        $http.get('data/data.json').success(function (data) {
            vm.data = data;
            vm.result = data;
        }).error(function (data) {
            console.log("No data found..");
        });
    };
    textSearchController.constructor = textSearchController;
    p = textSearchController.prototype;
    /**
     * @ngdoc method
     * @name searchButtonClick
     * @methodOf textSearchApp.controller:textSearchController
     * @description
     * On click of search button, filter the result from the data array and push the object to result array
     *
     */

    p.searchButtonClick = function () {
        if (!this.searchText) {
            this.result = this.data;
            return;
        }
        var result = [],
            searchText = this.searchText.toLowerCase();

        angular.forEach(this.data, function (item) {

            if (item.name.toLowerCase().indexOf(searchText) !== -1) {
                result.push(item);
            }
        });
        this.result = result;
    };
    /**
     * @ngdoc method
     * @name resetBtnClick
     * @methodOf textSearchApp.controller:textSearchController
     * @description
     * On click of reset button, clear the search text model value and display all the name in the json
     *
     */
    p.resetBtnClick = function () {
        this.result = this.data;
        this.searchText = '';
    };
    angular.module("textSearchApp").controller('textSearchController', textSearchController);
    textSearchController.$inject = ['$http'];
}());