import { assert } from 'chai';
import {lazy} from "../../lib/lazy/lazy"

describe('Lazy', () => {

    it('should be able to get the result of the delayed execution', () => {

        assert.equal(
            lazy(() => 'result').get(),
            'result')

    })

    it('should delay execution until a fold', () => {

        let value = 'original'

        const lazySideEffect = lazy(() => {

            value = 'changed'

            return null
        })

        lazySideEffect.map(() => null)

        assert.equal(value, 'original')

        lazySideEffect.get()

        assert.equal(value, 'changed')

    })

})