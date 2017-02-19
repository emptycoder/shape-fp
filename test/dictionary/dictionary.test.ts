import { assert } from 'chai'
import {dictionary} from '../../lib/dictionary/dictionary'

describe('Dictionary', () => {

    it('should be able to return its keys as an array', () => {

        assert.deepEqual(
            dictionary({ 'a': 1 }).keys(),
            [ 'a' ]
        )

    })

    it('should be able to return its values as an array', () => {

        assert.deepEqual(
            dictionary({ 'a': 1 }).values(),
            [ 1 ]
        )

    })

    it('should be able to return the entries it contains', () => {

        assert.deepEqual(
            dictionary({ 'a': 1 }).entries(),
            [ [ 'a', 1 ] ]
        )

    })

    it('should be able to map over its values', () => {

        assert.deepEqual(
            dictionary({ 'a': 1 }).map((k, v) => v + 1).get(),
            { 'a': 2 }
        )

    })

    it('should be foldable', () => {

        assert.deepEqual(
            dictionary({ 'a': 1 }).fold((k, v) => v + 1),
            { 'a': 2 }
        )

    })


})