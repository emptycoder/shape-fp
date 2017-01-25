import { assert } from 'chai';
import { box } from "../../lib/box/box"

describe('Box', () => {

    it('should be able to fold', () => {

        assert.equal(
            box(1).fold(x => x + 1),
            2)

    })

    it('should mappable to a list', () => {

        assert.deepEqual(
            box(1).list(x => [x, x]).get(),
            [1, 1])

    })


})