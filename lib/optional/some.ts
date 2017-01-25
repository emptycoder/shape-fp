import Optional from "./optional"

export class Some<X> implements Optional<X> {

    private x : X

    constructor(x : X) {

        this.x = x

    }

    map<Y>(f : (x : X) => Y) : Some<Y> {

        return new Some(f(this.x))

    }

    fold<Y>(onNone: () => Y, onSome: (x : X) => Y) : Y {

        return onSome(this.x)

    }

    orElse(x: X): Optional<X> {

        return this

    }

    get() : X|null {

        return this.x

    }

    getOrDefault(defaultValue : X) : X {

        return this.x

    }

}

export const some = <X>(value: X) => new Some(value)