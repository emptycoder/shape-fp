export class Box<X> {

    x : X

    constructor(value : X) {

        this.x = value

    }

    map<Y>(f : (X) => Y) : Box<Y> {

        return new Box(f(this.x))

    }

    fold<Y>(f : (X) => Y) : Y {

        return f(this.x)

    }

    pairBy<Y>(f : (X) => Y) : Box<[X, Y]> {

        return this.map((x) => {

            let pair : [X, Y] = [ x, f(x) ]

            return pair

        })

    }

}

export const box = <T>(value: T) => new Box(value)