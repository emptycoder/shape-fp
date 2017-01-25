declare const forward: <X, Y, Z>(f: (x: X) => Y, g: (y: Y) => Z) => (x: any) => Z;
export default forward;
