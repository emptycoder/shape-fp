import Optional from "./optional"

export class None<X> implements Optional<X> {

    constructor() {

    }

    map<Y>(f : (X) => Y) : None<Y> {

        return this

    }

    run<Y>(onSome : (X) => void, onNone : () => void) {

        onNone()

    }

}

export const none = <X>() => new None<X>()