export declare class Box<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (X) => Y): Box<Y>;
    fold<Y>(f: (X) => Y): Y;
    get(): any;
    pairBy<Y>(f: (X) => Y): Box<[X, Y]>;
}
export declare const box: <X>(value: X) => Box<X>;
