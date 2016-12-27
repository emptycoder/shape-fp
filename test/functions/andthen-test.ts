import { assert } from 'chai';
import andThen from "../../lib/functions/andthen"

describe('andThen', () => {

    it('should map a value with the first function and then with the second function', () => {

        const increment = (x) => x + 1
        const square = (x) => x * x

        const composition = andThen(increment, square)

        assert.equal(
            composition(1),
            4)

    })

})