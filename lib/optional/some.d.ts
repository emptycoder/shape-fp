import Optional from "./optional";
export declare class Some<X> implements Optional<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (X) => Y): Some<Y>;
    run<Y>(onSome: (X) => void, onNone: () => void): void;
}
export declare const some: <X>(value: X) => Some<X>;
