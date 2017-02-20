import {Box, box} from '../box/box'
import {Optional, optional} from './optional'

export class None<X> implements Optional<X> {

    map<Y>(f : (x : X) => Y) : None<Y> {

        return none<Y>()

    }

    fold<Y>(onNone: () => Y, onSome: (x : X) => Y) : Y {

        return onNone()

    }

    orElse(x: X | null): Optional<X> {

        return optional(x)

    }

    getOrDefault(defaultValue : X) : X {

        return defaultValue

    }

    get() : X|null {

        return null

    }

    isDefined(): boolean {

        return false

    }

    isEmpty(): boolean {

        return true

    }

    run(f : (x : X) => void) {

    }

    box<Y>(onNone: () => Y, onSome: (x : X) => Y) : Box<Y> {

        return box(onNone())

    }

}

export function none<X>() : None<X> {

    return new None<X>()

}