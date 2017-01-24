"use strict";
var chai_1 = require("chai");
var object_1 = require("../../lib/object/object");
describe('entries', function () {
    it('should return an array of key/value tuples', function () {
        chai_1.assert.deepEqual(object_1.entries({ id: '1' }), [['id', '1']]);
    });
});
//# sourceMappingURL=object.test.js.map