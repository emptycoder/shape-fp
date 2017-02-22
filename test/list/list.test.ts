import { assert } from 'chai'
import {list, List} from '../../lib/list/list'

describe('List', () => {

    const isEven = (x : number) => x % 2 == 0

    it('should be mappable', () => {

        const instance = list([1, 2, 3])

        assert.deepEqual(
            instance.map(x => x + 1).get(),
            [ 2, 3, 4 ]
        )

    })

    it('should provide the index when mapping', () => {

        const instance = list(['a', 'b', 'c'])

        assert.deepEqual(
            instance.map((x, i) => i).get(),
            [ 0, 1, 2 ]
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

    it('should be able to fold', () => {

        assert.deepEqual(
            list([1, 2, 3]).fold((accumulator, x) => accumulator + x, 0),
            6)

    })

    it('should be able to filter', () => {

        assert.deepEqual(
            list([1, 2, 3, 4]).filter(x => x % 2 == 0).get(),
            [2, 4])

    })

    it('should be able to check if contains a particular item', () => {

        assert.isTrue(list([1, 2, 3]).contains(1))
        assert.isFalse(list([1, 2, 3]).contains(0))

    })

    it('should be able to optionally return the first item', () => {

        assert.isTrue(list([]).first().isEmpty())
        assert.equal(list([1, 2, 3]).first().get(), 1)

    })

    it('should be able to check if it includes a particular member', () => {

        assert.isTrue(list([]).last().isEmpty())
        assert.equal(list([1, 2, 3]).last().get(), 3)

    })

    it('should be able to optionally return the first index of a specified member', () => {

        assert.equal(list([1, 2]).indexOf(1).get(), 0)
        assert.equal(list([1, 2]).indexOf(2).get(),1)
        assert.isTrue(list([1, 2]).indexOf(3).isEmpty())

    })

    it('should be able to optionally return the first item that matches a given predicate as an option', () => {

        assert.isTrue(list([]).find(isEven).isEmpty())
        assert.isTrue(list([1]).find(isEven).isEmpty())
        assert.equal(list([1, 2]).find(isEven).get(), 2)
        assert.equal(list([1, 2, 3, 4]).find(isEven).get(), 2)

    })

    it('should be able to check if a predicate is true for any member', () => {

        assert.isTrue(list([1, 2, 3]).any(isEven))
        assert.isFalse(list([1, 3, 5]).any(isEven))

    })

    it('should be able to check if a predicate is true for all members', () => {

        assert.isTrue(list([0, 2, 4]).any(isEven))
        assert.isFalse(list([0, 2, 5]).all(isEven))

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

})