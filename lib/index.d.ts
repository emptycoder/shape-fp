export declare class Box<X> {
    x: X;
    constructor(value: X);
    map<Y>(f: (X) => Y): Box<Y>;
    fold<Y>(f: (X) => Y): Y;
    pairBy<Y>(f: (X) => Y): Box<[X, Y]>;
}
export declare const box: <T>(value: T) => Box<T>;
