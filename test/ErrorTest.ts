/// <reference path="../typings/globals/mocha/index.d.ts" />
import {error} from "../lib/Error"
import identity from "../lib/Identity"
import { assert } from 'chai';

describe('Error', () => {

    it('should return the result of the first function', () => {

        assert.equal(
            error<string, number>("error").fold(e => 'expected', x => x + 1),
            'expected')

    })

    it('should not map', () => {

        assert.equal(
            error<string, number>("error").map(x => x + 1).fold(identity, identity),
            "error")

    })

})