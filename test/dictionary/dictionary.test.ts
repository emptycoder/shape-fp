import { assert } from 'chai'
import {dictionary} from '../../lib/dictionary/dictionary'

describe('Dictionary', () => {

    const data = dictionary({ 'a': 1, 'b': 2 })

    it('should be able to return its keys as an array', () => {

        assert.deepEqual(
            data.keys(),
            [ 'a', 'b' ]
        )

    })

    it('should be able to return its values as an array', () => {

        assert.deepEqual(
            data.values(),
            [ 1, 2 ]
        )

    })

    it('should be able to return the entries it contains', () => {

        assert.deepEqual(
            data.entries(),
            [ [ 'a', 1 ], [ 'b', 2 ] ]
        )

    })

    it('should be able to map over its values', () => {

        assert.deepEqual(
            data.map((k, v) => v + 1).get(),
            { 'a': 2, 'b': 3 }
        )

    })

    it('should be chainable', () => {

        assert.deepEqual(
            data.chain((k, v) => dictionary({ key1: v, key2: v })).get(),
            { key1: 2, key2: 2 }
        )

    })

    it('should be foldable', () => {

        assert.deepEqual(
            data.fold((k, v) => v + 1),
            { 'a': 2, 'b': 3 }
        )

    })

})