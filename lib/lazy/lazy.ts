export class Lazy<X> {

    constructor(private g : () => X) {

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

export function lazy <X>(g: () => X) {

    return new Lazy(g)

}