import { assert } from 'chai'
import {groupNumberValuePairs, groupStringValuePairs} from '../../lib/pairs/pairs'

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