import { assert } from 'chai'
import {entries, groupPairsByFirst} from '../../lib/dictionary/object'

describe('entries', () => {

    it('should return an array of key/value tuples', () => {

        assert.deepEqual(
            entries({ id: '1'}),
            [ [ 'id', '1' ] ]
        )

    })

})

describe('groupPairsByFirst', () => {

    it('should map an array of pairs to a dictionary', () => {

        let dictionary = groupPairsByFirst([['A', 1], ['B', 2], ['B', 3]])

        assert.deepEqual(
            dictionary,
            { A: [ 1 ], B: [ 2, 3, ] }
        )

    })

})