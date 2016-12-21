/// <reference path="../typings/globals/mocha/index.d.ts" />

import { assert } from 'chai';
import identity from '../lib/Identity'
import {task} from '../lib/Task'
import {success} from '../lib/Success'

describe('Task', () => {

    it('should delay execution until a fold', () => {

        let sideEffect = 1

        const taskWithSideEffect = task(() => {

            sideEffect += 1

            return success<string, string>('A')
        })

        assert.equal(sideEffect, 1)

        const mappedTask = taskWithSideEffect
            .map((x) => 'B')

        assert.equal(sideEffect, 1)

        const result = mappedTask
            .fold(identity, identity)

        assert.equal(sideEffect, 2)
        assert.equal(result, 'B')


    })


})