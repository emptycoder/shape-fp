const forward = <X, Y, Z>(f: (x : X) => Y, g: (y : Y) => Z) =>

    x => g(f(x))

export default forward