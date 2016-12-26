import {success} from "../../lib/result/success"
import identity from "../../lib/identity/identity"
import { assert } from 'chai';

describe('Success', () => {

    it('should return the result of the second function', () => {

        assert.equal(
            success<string, number>(1).fold(e => 'expected', x => x + 1),
            2)

    })

    it('should actually map', () => {

        assert.equal(
            success<string, number>(1).map(x => x + 1).fold(identity, identity),
            2)

    })

})