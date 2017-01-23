export declare class List<X> {
    private xs;
    constructor(xs: X[]);
    map<Y>(f: (X) => Y): List<Y>;
    chain<Y>(f: (X) => List<Y>): List<Y>;
    fold<Y>(f: (X) => Y): Y[];
    get(): X[];
    run(f: (X) => void): void;
}
export declare const list: <X>(array: X[]) => List<X>;
