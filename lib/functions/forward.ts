const forward = <X, Y, Z>(f: (X) => Y, g: (Y) => Z) =>

    x => g(f(x))

export default forward