"use strict";
var chai_1 = require("chai");
var list_1 = require("../../lib/list/list");
describe('List', function () {
    it('should be able to fold', function () {
        chai_1.assert.deepEqual(list_1.list([1, 2]).fold(function (x) { return x + 1; }), [2, 3]);
    });
    it('should do the same thing for folding and mapping followed by getting', function () {
        var instance = list_1.list([1, 2]);
        var f = function (x) { return x + 1; };
        chai_1.assert.deepEqual(instance.fold(f), instance.map(f).get());
    });
    it('should make it possible flatten the items', function () {
        var instance = list_1.list(['A', 'B']);
        chai_1.assert.deepEqual(instance.flatten(function (item) { return item.join(' '); }), 'A B');
    });
});
//# sourceMappingURL=list.test.js.map