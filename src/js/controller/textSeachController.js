(function () {
    "use strict";
    var textSearchController = function ($http) {
        var vm = this;
        this.searchText = '';
        this.http = $http;
        $http.get('data/data.json').success(function (data, status, headers, config) {
            vm.data = data;
            vm.result = data;
        }).error(function (data, status, headers, config) {
            console.log("No data found..");
        });
    }

    var p = textSearchController.prototype;
    p.searchButtonClick = function () {
        if (!this.searchText) {
            this.result = this.data;
            return;
        }
        var result = [];
        var searchText = this.searchText.toLowerCase();       
        angular.forEach(this.data, function (item) {

            if (item.name.toLowerCase().indexOf(searchText) !== -1) {
                result.push(item);
            }
        });
        this.result = result
      


    }
    p.resetBtnClick = function () {
        this.result = this.data;
        this.searchText = '';
    }
    angular.module("textSearchApp").controller('textSearchController', textSearchController);
    textSearchController.$inject = ['$http'];
}());

