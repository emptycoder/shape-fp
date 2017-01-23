import { assert } from 'chai';
import {list} from '../../lib/list/list'

describe('List', () => {

    it('should be able to fold', () => {

        assert.deepEqual(
            list([1, 2]).fold(x => x + 1),
            [2, 3])

    })

    it('should do the same thing for folding and mapping followed by getting', () => {

        let instance = list([1, 2])
        let f = x => x + 1

        assert.deepEqual(
            instance.fold(f),
            instance.map(f).get())

    })


})