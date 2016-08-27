/**
 * Created by Pradeep Prabhu on 8/27/2016.
 */
describe('Filters', function () {
    'use strict';
    var textSearchApp, alphabeticalFilter, filter;
    beforeEach(function () {
        module('textSearchApp');
        inject(function ($injector) {
            filter = $injector.get('$filter');
            alphabeticalFilter = filter('alphabetical');
        });

    });
    describe('alphabetical', function () {
        //   beforeEach();
        it('Should be return as undefined', function () {
            var alphabeticalOrder = alphabeticalFilter();
            expect(alphabeticalOrder).toBeUndefined();
        });
        it('Should be return as empty array', function () {
            var alphabeticalOrder = alphabeticalFilter([]);
            expect(alphabeticalOrder.length).toBe(0);
        });
        it('Should be return same value ', function () {
            var alphabeticalOrder = alphabeticalFilter([{name:'a'},{name:'b'},{name:'c'}]);
            var  answer = [{name:'a'},{name:'b'},{name:'c'}];
            expect(alphabeticalOrder).toEqual(answer);
        });
        it('Should be arranged in alphabetical order', function () {
            var alphabeticalOrder = alphabeticalFilter([{name:'c'},{name:'a'},{name:'b'}]);
            var  answer = [{name:'a'},{name:'b'},{name:'c'}];
            expect(alphabeticalOrder).toEqual(answer);
        });
    });
});