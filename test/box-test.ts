import { assert } from 'chai';
import { box } from "../lib/box"

describe('Box', () => {

    it('should be able to fold', () => {

        assert.equal(
            box(1).fold(x => x + 1),
            2)

    })

})