import { assert } from 'chai'
import {entries, toObject} from '../../lib/objects/objects'
import {StringValuePair} from '../../lib/pairs/pairs'

const obj = { id: '1'}
const pairs = [ [ 'id', '1' ] ] as StringValuePair<string>[]

describe('entries', () => {

    it('should return an array of key/value tuples', () => {

        assert.deepEqual(
            entries(obj),
            pairs
        )

    })

})

describe('toObject', () => {

    it('should be the inverse of the entries function', () => {

        assert.deepEqual(
            toObject(entries(obj)),
            obj
        )

        assert.deepEqual(
            entries(toObject(pairs)),
            pairs
        )


    })

})