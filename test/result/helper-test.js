"use strict";
const chai_1 = require("chai");
const helper_1 = require("../../lib/result/helper");
describe('tryFromCatch', () => {
    it('should be able to return a JSON object if the input is valid JSON.', () => {
        chai_1.assert.deepEqual(helper_1.tryCatch(() => JSON.parse('{"key": "value"}')).get(), { key: 'value' });
    });
    it('should be able to return a JSON object if the input is invalid JSON.', () => {
        chai_1.assert.deepEqual(helper_1.tryCatch(() => JSON.parse('{key: "value"}')).get().name, "SyntaxError");
    });
});
//# sourceMappingURL=helper-test.js.map