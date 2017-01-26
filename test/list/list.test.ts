import { assert } from 'chai';
import {list} from '../../lib/list/list'

describe('List', () => {

    it('should be able to fold', () => {

        assert.deepEqual(
            list([1, 2]).fold(x => x + 1),
            [2, 3])

    })

    it('should be able to filter', () => {

        assert.deepEqual(
            list([1, 2, 3, 4]).filter(x => x % 2 == 0).get(),
            [2, 4])

    })

    it('should be able to return the first item as an optional', () => {

        assert.isTrue(list([]).first().isEmpty())
        assert.isTrue(list([1]).first().isDefined())

    })

    it('should do the same thing for folding and mapping followed by getting', () => {

        let instance = list([1, 2])
        let f = x => x + 1

        assert.deepEqual(
            instance.fold(f),
            instance.map(f).get())

    })

    it('should make it possible flatten the items', () => {

        let instance = list(['A', 'B'])

        assert.deepEqual(
            instance.flatten(item => item.join(' ')),
            'A B')

    })



})