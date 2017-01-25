import { assert } from 'chai';
import {resolved, rejected, Task} from "../../lib/task/task"

describe('Task', () => {

    it('should be able to work synchronously with a resolved value', () => {

        resolved<any, number>(1)
            .map(x => x + 1)
            .fork(
                assert.fail,
                result => assert.equal(result, 2))

    })

    it('should be able to work synchronously with a rejected value', () => {

        rejected<any, number>(1)
            .map(x => x + 1)
            .fork(
                assert.ok,
                assert.fail)

    })

})

