import { assert } from 'chai'
import {some} from '../../lib/optional/some'

describe('Some', () => {

    const x = 1
    const defaultValue = 0

    it('should be mappable', () => {

        assert.equal(
            some(x).map(x => x + 1).get(),
            x + 1)

    })


    it('should be foldable', () => {

        assert.equal(
            some(x).fold(() => undefined, x => x + 1),
            x + 1)

    })

    it('should return the value it holds', () => {

        assert.equal(
            some(x).get(),
            x)

        assert.equal(
            some(x).getOrDefault(defaultValue),
            x)


    })


    it('should always be defined', () => {

        assert.isTrue(some(x).isDefined())

    })

    it('should never be empty', () => {

        assert.isFalse(some(x).isEmpty())

    })


})