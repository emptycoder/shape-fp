import {success} from "../../lib/result/success"
import identity from "../../lib/functions/identity"
import { assert } from 'chai';
import {failure} from "../../lib/result/failure"

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

    it('should form a chain', () => {

        assert.equal(
            success<string, number>(1).chain(x => failure('new failure')).get(),
            'new failure')

    })


})