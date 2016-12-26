import identity from '../identity/identity'

export class Lazy<X> {

    private g : () => X

    constructor(g : () => X) {

        this.g = g

    }

    map<Y>(f : (X) => Y) : Lazy<Y> {

        let fg = () => f(this.g())

        return new Lazy<Y>(fg)

    }

    fold<Y>(f : (X) => Y) : Y {

        return f(this.g())

    }

    get () : X {

        return this.fold(identity)
    }

    run(f : (X) => void) {

        f(this.g())

    }

}

export const lazy = <X>(g: () => X) => new Lazy(g)