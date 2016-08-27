/**
 * Created by Pradeep Prabhu on 8/27/2016.
 */
describe('Filters', function () {
    'use strict';
    var textSearchApp, controller, textSearchController;
    beforeEach(function () {
        module('textSearchApp');
        inject(function ($injector) {
            controller = $injector.get('$controller');
            textSearchController = controller('textSearchController');
        });

    });
    describe('textSearchController', function () {
        //   beforeEach();
        it('Should be return as undefined', function () {
            expect(textSearchController).toBeDefined();
        });
        it('Should be return the default value for all variable ', function () {
            expect(textSearchController.searchText).toBeDefined();
            expect(textSearchController.searchText).toBe('');
            expect(textSearchController.data).toBeDefined();
            expect(textSearchController.data).toEqual({});
            expect(textSearchController.result).toBeDefined();
            expect(textSearchController.result).toEqual([])
        });
        it('Should be able to search the text in the array ', function () {
            textSearchController.data = [{name:'a'},{name:'b'},{name:'c'}];
            textSearchController.searchText='a';
            textSearchController.searchButtonClick();
            expect(textSearchController.searchText).toBe('a');
            expect(textSearchController.result.length).toBe(1);
        });
        it('Should be able to reset the value for search and result ', function () {
            textSearchController.data = [{name:'a'},{name:'b'},{name:'c'}];
            textSearchController.searchText='a';
            textSearchController.resetBtnClick();
            expect(textSearchController.searchText).toBe('');
            expect(textSearchController.result.length).toBe(3);
        });
        it('Should be able to return the entire day if the search text is empty ', function () {
            textSearchController.data = [{name:'c'},{name:'a'},{name:'b'}];
            textSearchController.searchText='';
            textSearchController.searchButtonClick();
            expect(textSearchController.searchText).toBe('');
            expect(textSearchController.result.length).toBe(3);
        });
    });
});