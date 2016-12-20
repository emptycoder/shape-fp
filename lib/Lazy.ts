import identity from './Identity'

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

    get () {

        return this.fold(identity)
    }

    pairBy<Y>(f : (X) => Y) : Lazy<[X, Y]> {

        return this.map((x) => {

            let pair : [X, Y] = [ x, f(x) ]

            return pair

        })

    }

}

export const lazy = <X>(g: () => X) => new Lazy(g)