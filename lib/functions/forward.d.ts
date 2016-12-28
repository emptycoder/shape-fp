declare const forward: <X, Y, Z>(f: (X: any) => Y, g: (Y: any) => Z) => (x: any) => Z;
export default forward;
