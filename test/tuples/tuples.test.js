"use strict";
var chai_1 = require("chai");
var tuples_1 = require("../../lib/tuples/tuples");
describe('groupByFirst', function () {
    it('maps an array of tuples to a dictionary grouped by the first item of the tuple', function () {
        chai_1.assert.deepEqual(tuples_1.groupByFirst([['A', 1], ['A', 2], ['B', 1]]), { 'A': [1, 2], 'B': [1] });
    });
});
describe('indexed', function () {
    it('should pair each item withs index', function () {
        chai_1.assert.deepEqual(tuples_1.indexed(['first', 'second']), [['first', 0], ['second', 1]]);
    });
});
//# sourceMappingURL=tuples.test.js.map