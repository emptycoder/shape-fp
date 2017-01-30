import { assert } from 'chai';
import {entries, fromPairs} from '../../lib/object/object'
import {mapValues} from '../../lib/object/object'

describe('entries', () => {

    it('should return an array of key/value tuples', () => {

        assert.deepEqual(
            entries({ id: '1'}),
            [ [ 'id', '1' ] ]
        )

    })

})

describe('mapValues', () => {

    interface NumberObject {

        member : number
    }


    interface StringObject {

        member : string
    }

    it('should map an object from one type to another type by mapping its values', () => {

        assert.deepEqual(
            mapValues<NumberObject, number, StringObject, string>({ member: 1 }, number => number.toString()),
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