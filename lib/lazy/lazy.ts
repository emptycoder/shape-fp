import identity from '../functions/identity'

export class Lazy<X> {

    private g : () => X

    constructor(g : () => X) {

        this.g = g

    }

    map<Y>(f : (x : X) => Y) : Lazy<Y> {

        let fg = () => f(this.g())

        return new Lazy<Y>(fg)

    }

    fold<Y>(f : (x : X) => Y) : Y {

        return f(this.g())

    }

    get () : X {

        return this.g()
    }

    run(f : (x : X) => void) {

        f(this.g())

    }

}

export const lazy = <X>(g: () => X) => new Lazy(g)