import { assert } from 'chai';
import {resolved, rejected} from "../../lib/task/task"

describe('Task', () => {

    it('should be able to work synchronously with a resolved value', () => {

        resolved(1)
            .map(x => x + 1)
            .fork(
                assert.fail,
                result => assert.equal(result, 2))

    })

    it('should be able to work synchronously with a rejected value', () => {

        rejected(1)
            .map(x => x + 1)
            .fork(
                assert.ok,
                assert.fail)

    })

})