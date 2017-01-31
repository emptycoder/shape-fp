import { assert } from 'chai';
import {groupByFirst, indexed} from '../../lib/tuples/tuples'

describe('groupByFirst', () => {

    it('maps an array of tuples to a dictionary grouped by the first item of the tuple', () => {

        assert.deepEqual(
            groupByFirst([['A', 1], ['A', 2], ['B', 1]]),
            { 'A': [1, 2], 'B': [1]})

    })

})

describe('indexed', () => {

    it('should pair each item withs index', () => {

        assert.deepEqual(
            indexed(['first', 'second']),
            [['first', 0], ['second', 1]])

    })

})