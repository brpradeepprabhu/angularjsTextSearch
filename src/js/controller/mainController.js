(function () {
    "use strict";   
    /**
    * @ngdoc controller
    * @name textSearchApp.controller:mainController
    * @description 
     To handle the all the models and events for main page   
    */
   
    var mainController = function () {


    };
    var p = mainController.prototype;
    /**
     * @ngdoc method
     * @name navClick
     *
     * @methodOf textSearchApp.controller:mainController
     * @description
     *  when we resize, On click of nav icon button, it will show and hide the menu
     *
     */
    p.navClick = function()
    {
        var element = angular.element(document.querySelector('#nav ul'))[0];
        element.className=(element.className=='mobileNav')?'':'mobileNav';
        console.log(element)

    };
    angular.module("textSearchApp").controller('mainController', mainController);

}());
