function andThen<X, Y, Z>(f: (X) => Y, g: (Y) => Z) {

    return (x) => g(f(x))

}

export default andThen