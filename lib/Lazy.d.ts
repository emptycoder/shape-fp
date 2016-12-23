export declare class Lazy<X> {
    private g;
    constructor(g: () => X);
    map<Y>(f: (X) => Y): Lazy<Y>;
    fold<Y>(f: (X) => Y): Y;
    get(): any;
    pairBy<Y>(f: (X) => Y): Lazy<[X, Y]>;
}
export declare const lazy: <X>(g: () => X) => Lazy<X>;
