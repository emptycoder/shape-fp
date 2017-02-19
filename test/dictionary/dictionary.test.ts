import { assert } from 'chai'
import {dictionary} from '../../lib/dictionary/dictionary'
import {Entry} from '../../lib/dictionary/object'

describe('Dictionary', () => {

    it('should be able to return its keys as an array', () => {

        assert.deepEqual(
            dictionary([[ 'key',  1 ]]).keys(),
            [ 'key' ]
        )

    })

    it('should be able to return its values as an array', () => {

        assert.deepEqual(
            dictionary([[ 'key',  1 ]]).values(),
            [ 1 ]
        )

    })

    it('should be able to return the entries it contains', () => {

        const entries = [[ 'key',  1 ]] as Entry<number>[]

        assert.deepEqual(
            dictionary(entries).entries(),
            entries
        )

    })

    it('should be able to map over its values', () => {

        assert.deepEqual(
            dictionary([[ 'key',  1 ]]).map((k, v) => v + 1).entries(),
            [['key', 2]]
        )

    })


})

describe('dictionary', () => {

    it('should be overloaded correctly', () => {

        assert.deepEqual(
            dictionary([[ 'key',  1 ]]).entries(),
            dictionary({ 'key':  1 }).entries()
        )

    })


})