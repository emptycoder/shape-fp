import identity from '../functions/identity'
import {Result} from "../result/result"

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

    get () : X {

        return this.x

    }

    run(f : (X) => void) {

        f(this.x)

    }

    attempt<F, S>(f: (X) => Result<F, S>) {

        return f(this.x)

    }

}

export const box = <X>(value: X) => new Box(value)