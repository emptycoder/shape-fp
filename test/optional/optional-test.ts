import { assert } from 'chai';
import {some} from "../../lib/optional/some"
import {none} from "../../lib/optional/none"

describe('Optional', () => {

    it('should be able to run a side-effect on the value if there is one', () => {

        let actual = null

        some(1)
            .run(
                x => actual = x,
                () => {})

        assert.equal(
            actual,
            1)

    })


    it('should be able to run a side-effect if there is no value', () => {

        let actual = null

        none<number>()
            .run(
                x => {},
                () => actual = 2)

        assert.equal(
            actual,
            2)

    })

})