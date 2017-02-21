import { assert } from 'chai'
import {groupNumberValuePairs, groupStringValuePairs} from '../../lib/tuples/pairs'

describe('groupStringValuePairs', () => {

    it('should map an array of pairs to an object', () => {

        assert.deepEqual(
            groupStringValuePairs([['A', 1], ['B', 2], ['B', 3]]),
            { A: [ 1 ], B: [ 2, 3, ] }
        )

    })

})

describe('groupNumberValuePairs', () => {

    it('should map an array of pairs to a dictionary', () => {

        assert.deepEqual(
            groupNumberValuePairs([[1, 'A'], [2, 'B'], [1, 'C']]),
            { 1: ['A', 'C'], 2 : ['B'] }
        )

    })

})