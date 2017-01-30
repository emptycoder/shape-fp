import Optional from "./optional"
import optional from "./helper"
import {Box, box} from '../box/box'

export class None<X> implements Optional<X> {

    constructor() {

    }

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

    box<Y>(onNone: () => Y, onSome: (x : X) => Y) : Box<Y> {

        return box(onNone())

    }

}

export const none = <X>() => new None<X>()