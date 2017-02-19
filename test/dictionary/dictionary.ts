import { assert } from 'chai';
import {entries, fromPairs, groupPairsByFirst, mapValues} from '../../lib/dictionary/dictionary'

describe('entries', () => {

    it('should return an array of key/value tuples', () => {

        assert.deepEqual(
            entries({ id: '1'}),
            [ [ 'id', '1' ] ]
        )

    })

})

describe('mapValues', () => {

    it('should map an object from one type to another type by mapping its values', () => {

        assert.deepEqual(
            mapValues<number, string>({ member: 1 }, (key, number) => number.toString()),
            { member: '1' }
        )

    })

})

describe('fromPairs', () => {

    it('should map an array of pairs to a dictionary', () => {

        let dictionary = fromPairs([['first', 0], ['second', 1]])

        assert.deepEqual(
            dictionary,
            { first: 0, second: 1 }
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