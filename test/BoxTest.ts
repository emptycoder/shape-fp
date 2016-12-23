/// <reference path="../typings/globals/mocha/index.d.ts" />
import { assert } from 'chai';
import { box } from "../lib/Box"

describe('Box', () => {

    it('should be able to cause a side-effect and then return itself', () => {

        let value = 1

        assert.equal(
            box(1).tee(x => value += x).get(),
            1)

        assert.equal(
            value,
            2
        )

    })
})