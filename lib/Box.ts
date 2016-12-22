import identity from './Identity'

export class Box<X> {

    private x : X

    constructor(x : X) {

        this.x = x

    }

    map<Y>(f : (X) => Y) : Box<Y> {

        return new Box(f(this.x))

    }

    fold<Y>(f : (X) => Y) : Y {

        return f(this.x)

    }

    get () {

        return this.fold(identity)
    }

    run (f: (X) => void) {

        f(this.x)

    }

}

export const box = <X>(value: X) => new Box(value)