import Optional from "./optional"
import optional from "./helper"

export class None<X> implements Optional<X> {

    constructor() {

    }

    map<Y>(f : (X) => Y) : None<Y> {

        return none<Y>()

    }

    fold<Y>(onNone: () => Y, onSome: (X) => Y) : Y {

        return onNone()

    }

    orElse(x: X | null): Optional<X> {

        return optional(x)

    }

    getOrDefault(defaultValue : X) : Optional<X> {

        return defaultValue

    }

    get() : X|null {

        return null

    }

}

export const none = <X>() => new None<X>()