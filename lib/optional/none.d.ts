import Optional from "./optional";
import { Box } from '../box/box';
export declare class None<X> implements Optional<X> {
    constructor();
    map<Y>(f: (x: X) => Y): None<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): Y;
    orElse(x: X | null): Optional<X>;
    getOrDefault(defaultValue: X): X;
    get(): X | null;
    isDefined(): boolean;
    isEmpty(): boolean;
    box<Y>(onNone: () => Y, onSome: (x: X) => Y): Box<Y>;
}
export declare const none: <X>() => None<X>;
