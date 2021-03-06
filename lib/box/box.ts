import {Result} from '../result/result'
import {List, list} from '../list/list'

export class Box<X> {

    constructor(private x : X) {

    }

    map<Y>(f : (x : X) => Y) : Box<Y> {

        return new Box(f(this.x))

    }

    chain<Y>(f: (x : X) => Box<Y>) : Box<Y> {

        return f(this.x)

    }

    fold<Y>(f : (x : X) => Y) : Y {

        return f(this.x)

    }

    get () : X {

        return this.x

    }

    run(f : (x : X) => void) {

        f(this.x)

    }

    attempt<F, S>(f: (x : X) => Result<F, S>) : Result<F, S> {

        return f(this.x)

    }

    list<Y>(f : (x : X) => Y[]) : List<Y> {

        return list(f(this.x))

    }

}

export function box <X>(value: X) {

    return new Box(value)

}