/// <reference path="../typings/globals/mocha/index.d.ts" />
import { assert } from 'chai';
import { box } from "../lib/Box"

describe('Box', () => {

    it('should be able to cause a side-effect', () => {

        let value = 1

        box(1).run(x => value += x)

        assert.equal(
            value,
            2
        )

    })
})