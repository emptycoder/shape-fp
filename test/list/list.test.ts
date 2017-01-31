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

    it('should be able to check if it includes a particular member', () => {

        assert.isTrue(list([1, 2]).contains(2))
        assert.isNotTrue(list([1, 2]).contains(3))

    })

    it('should be able to optionally return the index of a specified member', () => {

        assert.equal(list([1, 2]).indexOf(1).get(), 0)
        assert.isTrue(list([1, 2]).indexOf(3).isEmpty())

    })

    it('should be able to return the first item that matches a predicate as an option', () => {

        const isEven = (x : number) => x % 2 == 0

        assert.isTrue(list([]).find(isEven).isEmpty())
        assert.isTrue(list([1]).find(isEven).isEmpty())
        assert.equal(list([1, 2]).find(isEven).get(), 2)
        assert.equal(list([1, 2, 3, 4]).find(isEven).get(), 2)

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

    it('should return return a new list with unique items', () => {

        let instance = list([1, 2, 2, 3, 3, 3])

        assert.deepEqual(
            instance.unique().get(),
            [ 1, 2, 3, ])

    })

})