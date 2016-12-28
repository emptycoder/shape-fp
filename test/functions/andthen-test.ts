import { assert } from 'chai'
import forward from "../../lib/functions/forward"

describe('forward', () => {

    it('should apply the first function and then the second function', () => {

        const increment = x => x + 1
        const square = x => x * x

        assert.equal(
            forward(increment, square)(2),
            9)

        assert.equal(
            forward(square, increment)(2),
            5)

    })

})