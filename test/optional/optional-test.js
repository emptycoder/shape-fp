import { assert } from 'chai';
import optional from "../../lib/optional/helper";
describe('Optional', function () {
    it('should be able to get an alternative', function () {
        assert.equal(optional(null).orElse(1).get(), 1);
    });
});
