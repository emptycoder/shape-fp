"use strict";
var chai_1 = require("chai");
var helper_1 = require("../../lib/result/helper");
describe('tryFromCatch', function () {
    it('should be able to return a JSON object if the input is valid JSON.', function () {
        chai_1.assert.deepEqual(helper_1.tryCatch(function () { return JSON.parse('{"key": "value"}'); }).get(), { key: 'value' });
    });
    it('should be able to return a JSON object if the input is invalid JSON.', function () {
        chai_1.assert.deepEqual(helper_1.tryCatch(function () { return JSON.parse('{key: "value"}'); }).get().name, "SyntaxError");
    });
});
//# sourceMappingURL=helper-test.js.map