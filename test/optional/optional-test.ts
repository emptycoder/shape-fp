import { assert } from 'chai';
import {some} from "../../lib/optional/some"
import {none} from "../../lib/optional/none"
import optional from "../../lib/optional/helper"

describe('Optional', () => {

    it('should be able to run a side-effect on the value when there is one', () => {

        let actual = null

        some(1)
            .run(
                () => {},
                x => { actual = x })

        assert.equal(
            actual,
            1)

    })


    it('should be able to run a side-effect when there is no value', () => {

        let actual = null

        none<number>()
            .run(
                () => actual = 2,
                x => {})

        assert.equal(
            actual,
            2)

    })

    it('should be able to get an alternative', () => {

        assert.equal(
            optional(null).orElse(1).get(),
            1)

    })


})