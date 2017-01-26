import Optional from "./optional";
export declare class None<X> implements Optional<X> {
    constructor();
    map<Y>(f: (x: X) => Y): None<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): Y;
    orElse(x: X | null): Optional<X>;
    getOrDefault(defaultValue: X): X;
    get(): X | null;
    isDefined(): boolean;
    isEmpty(): boolean;
}
export declare const none: <X>() => None<X>;
