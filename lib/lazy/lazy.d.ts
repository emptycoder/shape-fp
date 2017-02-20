export declare class Lazy<X> {
    private g;
    constructor(g: () => X);
    map<Y>(f: (x: X) => Y): Lazy<Y>;
    fold<Y>(f: (x: X) => Y): Y;
    get(): X;
    run(f: (x: X) => void): void;
}
export declare function lazy<X>(g: () => X): Lazy<X>;
