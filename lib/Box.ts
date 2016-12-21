import identity from './Identity'

export class Box<X> {

    private x : X

    constructor(x : X) {

        this.x = x

    }

    map<Y>(f : (X) => Y) : Box<Y> {

        return new Box(f(this.x))

    }

    fold<Y>(f : (X) => Y) : Y {

        return f(this.x)

    }

    get () {

        return this.fold(identity)
    }

    pairBy<Y>(f : (X) => Y) : Box<[X, Y]> {

        return this.map((x) => {

            let pair : [X, Y] = [ x, f(x) ]

            return pair

        })

    }

    tee(f : (X) => void) : Box<X> {

        f(this.x)

        return this
    }

}

export const box = <X>(value: X) => new Box(value)