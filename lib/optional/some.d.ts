import Optional from "./optional";
export declare class Some<X> implements Optional<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (X) => Y): Some<Y>;
    fold<Y>(onNone: () => Y, onSome: (X) => Y): Y;
    orElse(x: X): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): X;
}
export declare const some: <X>(value: X) => Some<X>;
