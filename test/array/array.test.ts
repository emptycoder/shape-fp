import { assert } from 'chai';
import {indexed, nth} from '../../lib/array/array'

const array = [1, 2, 3]

describe('nth', () => {

    it('should return the n-th item of an array', () => {

        assert.equal(nth(array, 0), 1)
        assert.equal(nth(array, 1), 2)
        assert.equal(nth(array, 2), 3)

    })

})

describe('indexed', () => {

    it('should pair each item withs index', () => {

        assert.deepEqual(
            indexed(['first', 'second']),
            [['first', 0], ['second', 1]])

    })

})