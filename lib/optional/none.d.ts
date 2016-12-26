import Optional from "./optional";
export declare class None<X> implements Optional<X> {
    constructor();
    map<Y>(f: (X) => Y): None<Y>;
    run<Y>(onSome: (X) => void, onNone: () => void): void;
}
export declare const none: <X>() => None<X>;
