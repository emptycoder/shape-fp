import { assert } from 'chai'
import {optional} from '../../lib/optional/optional'

describe('optional', () => {

    it('should map null to None', () => {

        const option = optional(null)

        assert.isTrue(option.isEmpty())
        assert.isFalse(option.isDefined())

    })

    it('should map undefined to None', () => {

        const option = optional(undefined)

        assert.isTrue(option.isEmpty())
        assert.isFalse(option.isDefined())

    })

    it('should map everything else to Some', () => {

        ['A', 1].forEach(x => {

            const option = optional(1)

            assert.isTrue(option.isDefined())
            assert.isFalse(option.isEmpty())

        })


    })


})