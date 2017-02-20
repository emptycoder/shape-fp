import { assert } from 'chai'
import {none} from '../../lib/optional/none'

describe('None', () => {

    const instance = none<number>()

    it('should ignore maps', () => {

        assert.isNull(
            instance.map(x => x + 1).get())

    })


    it('should be foldable', () => {

        assert.equal(
            instance.fold(() => 0, x => x + 1),
            0)

    })

    it('should be able to return null or a default value', () => {

        assert.isNotTrue(instance.get())

        assert.equal(
            instance.getOrDefault(0),
            0)

    })


    it('should never be defined', () => {

        assert.isFalse(instance.isDefined())

    })

    it('should never be empty', () => {

        assert.isTrue(instance.isEmpty())

    })


})