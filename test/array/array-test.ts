import { assert } from 'chai';
import {nth} from '../../lib/array/array'
import {head} from '../../lib/array/array'
import {tail} from '../../lib/array/array'

const array = [1, 2, 3]

describe('nth', () => {

    it('should return the n-th item of an array', () => {

        assert.equal(nth(array, 0), 1)
        assert.equal(nth(array, 1), 2)
        assert.equal(nth(array, 2), 3)

    })

})

describe('head', () => {

    it('should return the first item of an array', () => {

        assert.equal(head(array), 1)

    })

})

describe('tail', () => {

    it('should return all items except for the head', () => {

        assert.deepEqual(tail(array), [2, 3])

    })

})