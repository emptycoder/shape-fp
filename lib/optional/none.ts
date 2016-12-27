import Optional from "./optional"
import optional from "./helper"

export class None<X> implements Optional<X> {

    constructor() {

    }

    map<Y>(f : (X) => Y) : None<Y> {

        return none<Y>()

    }

    run<Y>(onSome : (X) => void, onNone : () => void) {

        onNone()

    }

    fold<Y>(onSome: (X) => Y, onNone: () => Y) : Y {

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