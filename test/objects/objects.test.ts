import { assert } from 'chai'
import {entries} from '../../lib/objects/objects'
import {groupNumberValuePairs, groupStringValuePairs} from '../../lib/objects/grouping'

describe('entries', () => {

    it('should return an array of key/value tuples', () => {

        assert.deepEqual(
            entries({ id: '1'}),
            [ [ 'id', '1' ] ]
        )

    })

})

describe('groupStringValuePairs', () => {

    it('should map an array of pairs to an object', () => {

        const actual = groupStringValuePairs([['A', 1], ['B', 2], ['B', 3]])

        assert.deepEqual(
            actual,
            { A: [ 1 ], B: [ 2, 3, ] }
        )

    })

})

describe('groupNumberValuePairs', () => {

    it('should map an array of pairs to a dictionary', () => {

        let dictionary = groupNumberValuePairs([[1, 'A'], [2, 'B'], [1, 'C']])

        assert.deepEqual(
            dictionary,
            { 1: ['A', 'C'], 2 : ['B'] }
        )

    })

})