"use strict";
var chai_1 = require("chai");
var objects_1 = require("../../lib/objects/objects");
describe('entries', function () {
    it('should return an array of key/value tuples', function () {
        chai_1.assert.deepEqual(objects_1.entries({ id: '1' }), [['id', '1']]);
    });
});
//# sourceMappingURL=objects.test.js.map