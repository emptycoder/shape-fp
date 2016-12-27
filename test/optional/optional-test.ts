import { assert } from 'chai';
import {some} from "../../lib/optional/some"
import optional from "../../lib/optional/helper"

describe('Optional', () => {

    it('should be able to get an alternative', () => {

        assert.equal(
            optional(null).orElse(1).get(),
            1)

    })

})