"use strict";
var chai_1 = require("chai");
var repetition_1 = require("../../lib/tuples/repetition");
describe('repeat', function () {
    it('should be able to repeat a number n times', function () {
        var numberValue = 1;
        chai_1.assert.deepEqual(repetition_1.repeat(numberValue, 1), [numberValue]);
        chai_1.assert.deepEqual(repetition_1.repeat(numberValue, 3), [numberValue, numberValue, numberValue]);
        var stringValue = 'test';
        chai_1.assert.deepEqual(repetition_1.repeat(stringValue, 3), [stringValue, stringValue, stringValue]);
    });
    it('should be able to repeat a string n times', function () {
        var stringValue = 'test';
        chai_1.assert.deepEqual(repetition_1.repeat(stringValue, 3), [stringValue, stringValue, stringValue]);
    });
});
//# sourceMappingURL=repetition.test.js.map