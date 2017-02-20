import {none} from './none'
import {some} from './some'
import isNil = require('lodash.isnil')
import {Box} from '../box/box'

export interface Optional<X> {

    map<Y>(f : (x : X) => Y) : Optional<Y>

    fold<Y>(onNone: () => Y, onSome : (x : X) => Y) : Y

    orElse(x : X) : Optional<X>

    get() : X|null

    getOrDefault(defaultValue : X)

    isDefined() : boolean

    isEmpty() : boolean

    run(f : (x : X) => void)

    box<Y>(onNone: () => Y, onSome : (x : X) => Y) : Box<Y>

}

export function optional<X>(value: X | null) : Optional<X> {

    return isNil(value) ? none<X>() : some(value)

}