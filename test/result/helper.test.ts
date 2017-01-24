import {success} from "../../lib/result/success"
import identity from "../../lib/functions/identity"
import { assert } from 'chai';
import {tryCatch} from "../../lib/result/helper"

describe('tryFromCatch', () => {

    it('should be able to return a JSON object if the input is valid JSON.', () => {

        assert.deepEqual(
            tryCatch(() => JSON.parse('{"key": "value"}')).get(),
            { key: 'value' })

    })

    it('should be able to return a JSON object if the input is invalid JSON.', () => {

        assert.deepEqual(
            tryCatch(() => JSON.parse('{key: "value"}')).get().name,
            "SyntaxError")

    })

})