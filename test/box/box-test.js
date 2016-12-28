import { assert } from 'chai';
import { box } from "../../lib/box/box";
describe('Box', function () {
    it('should be able to fold', function () {
        assert.equal(box(1).fold(function (x) { return x + 1; }), 2);
    });
});
