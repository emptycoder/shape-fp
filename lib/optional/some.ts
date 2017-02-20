import {Box, box} from '../box/box'
import {Optional} from './optional'

export class Some<X> implements Optional<X> {

    constructor(private x : X) {

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

    isDefined(): boolean {

        return true

    }

    isEmpty(): boolean {

        return false

    }

    run(f : (x : X) => void) {

        f(this.x)

    }

    box<Y>(onNone: () => Y, onSome: (x : X) => Y) : Box<Y> {

        return box(onSome(this.x))

    }

}

export function some <X>(value: X) {
    return new Some(value)
}