import { assert } from 'chai'
import {repeat} from '../../lib/tuples/repetition'

describe('repeat', () => {

    it('should be able to repeat a number n times', () => {

        const numberValue = 1

        assert.deepEqual(
            repeat(numberValue, 1),
            [ numberValue ]
        )

        assert.deepEqual(
            repeat(numberValue, 3),
            [ numberValue, numberValue, numberValue ]
        )

        const stringValue = 'test'

        assert.deepEqual(
            repeat(stringValue, 3),
            [ stringValue, stringValue, stringValue ]
        )

    })

    it('should be able to repeat a string n times', () => {

        const stringValue = 'test'

        assert.deepEqual(
            repeat(stringValue, 3),
            [ stringValue, stringValue, stringValue ]
        )

    })

})