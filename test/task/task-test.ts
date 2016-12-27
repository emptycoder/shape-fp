import { assert } from 'chai';
import {none} from "../../lib/optional/none"
import optional from "../../lib/optional/helper"
import {resolved, rejected} from "../../lib/task/task"

describe('Task', () => {

    it('should be able to work synchronously with a resolved value', () => {

        resolved(1)
            .map(x => x + 1)
            ._fork(
                assert.fail,
                result => assert.equal(result, 2))

    })

    it('should be able to work synchronously with a rejected value', () => {

        rejected(1)
            .map(x => x + 1)
            ._fork(
                assert.ok,
                assert.fail)

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

    it('should be able to get an alternative', () => {

        assert.equal(
            optional(null).orElse(1).get(),
            1)

    })


})