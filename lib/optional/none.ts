import Optional from "./optional"
import optional from "./helper"

export class None<X> implements Optional<X> {

    constructor() {

    }

    map<Y>(f : (X) => Y) : None<Y> {

        return none<Y>()

    }

    run<Y>(onNone : () => void, onSome : (X) => void) {

        onNone()

    }

    fold<Y>(onNone: () => Y, onSome: (X) => Y) : Y {

        return onNone()

    }

    orElse(x: X | null): Optional<X> {

        return optional(x)

    }

    get() : X|null {

        return null
    }

}

export const none = <X>() => new None<X>()