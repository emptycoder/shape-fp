import {failure} from "../lib/failure"
import identity from "../lib/identity"
import { assert } from 'chai';

describe('Failure', () => {

    it('should return the result of the first function', () => {

        assert.equal(
            failure<string, number>("failure").fold(e => 'expected', x => x + 1),
            'expected')

    })

    it('should not map', () => {

        assert.equal(
            failure<string, number>("failure").map(x => x + 1).fold(identity, identity),
            'failure')

    })

})