import { assert } from 'chai';
import optional from "../../lib/optional/helper"

describe('Optional', () => {

    it('should be able to get an alternative', () => {

        assert.equal(
            optional(null).orElse(1).get(),
            1)

    })

    it('should be empty when null', () => {

        const option = optional(null)

        assert.isTrue(option.isEmpty())
        assert.isFalse(option.isDefined())

    })

    it('should be empty when undefined', () => {

        const option = optional(undefined)

        assert.isTrue(option.isEmpty())
        assert.isFalse(option.isDefined())

    })

})