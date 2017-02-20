"use strict";
var chai_1 = require("chai");
var list_1 = require("../../lib/list/list");
describe('List', function () {
    it('should be able to fold', function () {
        chai_1.assert.deepEqual(list_1.list([1, 2]).fold(function (x) { return x + 1; }), [2, 3]);
    });
    it('should be able to filter', function () {
        chai_1.assert.deepEqual(list_1.list([1, 2, 3, 4]).filter(function (x) { return x % 2 == 0; }).get(), [2, 4]);
    });
    it('should be able to check if it includes a particular member', function () {
        chai_1.assert.isTrue(list_1.list([1, 2]).contains(2));
        chai_1.assert.isNotTrue(list_1.list([1, 2]).contains(3));
    });
    it('should be able to optionally return the index of a specified member', function () {
        chai_1.assert.equal(list_1.list([1, 2]).indexOf(1).get(), 0);
        chai_1.assert.isTrue(list_1.list([1, 2]).indexOf(3).isEmpty());
    });
    it('should be able to return the first item that matches a predicate as an option', function () {
        var isEven = function (x) { return x % 2 == 0; };
        chai_1.assert.isTrue(list_1.list([]).find(isEven).isEmpty());
        chai_1.assert.isTrue(list_1.list([1]).find(isEven).isEmpty());
        chai_1.assert.equal(list_1.list([1, 2]).find(isEven).get(), 2);
        chai_1.assert.equal(list_1.list([1, 2, 3, 4]).find(isEven).get(), 2);
    });
    it('should do the same thing for folding and mapping followed by getting', function () {
        var instance = list_1.list([1, 2]);
        var f = function (x) { return x + 1; };
        chai_1.assert.deepEqual(instance.fold(f), instance.map(f).get());
    });
    it('should be able to flatten the items', function () {
        var instance = list_1.list(['A', 'B']);
        chai_1.assert.deepEqual(instance.flatten(function (item) { return item.join(' '); }), 'A B');
    });
    it('should be able to check if a predicate is true for any member', function () {
        var instance = list_1.list([1, 2, 3]);
        chai_1.assert.isTrue(instance.any(function (x) { return x % 2 == 0; }));
        chai_1.assert.isFalse(instance.any(function (x) { return x >= 4; }));
    });
    it('should be able to associate items', function () {
        var instance = list_1.list([1, 2]);
        chai_1.assert.deepEqual(instance.associate(function (x) { return x * 2; }).get(), [[1, 2], [2, 4]]);
    });
    it('should be able to groups items', function () {
        var instance = list_1.list([1, 1, 2]);
        chai_1.assert.deepEqual(instance.groupBy(function (x) { return x.toString(); }).get(), { '1': [1, 1], '2': [2] });
    });
    it('should be mappable', function () {
        var instance = list_1.list([1, 2, 3]);
        chai_1.assert.deepEqual(instance.map(function (x) { return x + 1; }).get(), [2, 3, 4]);
    });
    // http://www.brunton-spall.co.uk/post/2011/12/02/map-map-and-flatmap-in-scala/
    it('should be chainable', function () {
        var f = function (x) { return list_1.list([x - 1, x, x + 1]); };
        chai_1.assert.deepEqual(list_1.list([1, 2, 3]).chain(f).get(), [0, 1, 2, 1, 2, 3, 2, 3, 4]);
    });
    it('should provide the index when mapping', function () {
        var instance = list_1.list(['a', 'b', 'c']);
        chai_1.assert.deepEqual(instance.map(function (x, i) { return i; }).get(), [0, 1, 2]);
    });
});
//# sourceMappingURL=list.test.js.map