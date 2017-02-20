import { assert } from 'chai';
import {list, List} from '../../lib/list/list'

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

        const instance = list([1, 2])
        const f = x => x + 1

        assert.deepEqual(
            instance.fold(f),
            instance.map(f).get())

    })

    it('should be able to flatten the items', () => {

        const instance = list(['A', 'B'])

        assert.deepEqual(
            instance.flatten(item => item.join(' ')),
            'A B')

    })

    it('should be able to check if a predicate is true for any member', () => {

        const instance = list([1, 2, 3])

        assert.isTrue(instance.any(x => x % 2 == 0))
        assert.isFalse(instance.any(x => x >= 4 ))

    })

    it('should be able to associate items', () => {

        const instance = list([1, 2])

        assert.deepEqual(
            instance.associate(x => x * 2).get(),
            [ [1, 2], [2, 4] ]
        )

    })

    it('should be able to groups items', () => {

        const instance = list([1, 1, 2])

        assert.deepEqual(
            instance.groupBy(x => x.toString()).get(),
            { '1': [ 1, 1 ], '2': [ 2 ] }
        )

    })

    it('should be mappable', () => {

        const instance = list([1, 2, 3])

        assert.deepEqual(
            instance.map(x => x + 1).get(),
            [ 2, 3, 4 ]
        )

    })

    // http://www.brunton-spall.co.uk/post/2011/12/02/map-map-and-flatmap-in-scala/
    it('should be chainable', () => {

        const f = (x : number) => list([ x-1, x, x + 1])

        assert.deepEqual(
            list([1, 2, 3]).chain(f).get(),
            [ 0, 1, 2, 1, 2, 3, 2, 3, 4 ]
        )

    })


    it('should provide the index when mapping', () => {

        const instance = list(['a', 'b', 'c'])

        assert.deepEqual(
            instance.map((x, i) => i).get(),
            [ 0, 1, 2 ]
        )

    })


})