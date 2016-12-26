import {Optional} from "./optional"

export class None<X> implements Optional<X> {

    constructor() {

    }

    map<Y>(f : (X) => Y) : None<Y> {

        return this

    }

}

export const none = <X>() => new None<X>()