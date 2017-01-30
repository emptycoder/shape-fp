import Optional from "./optional";
import { Box } from '../box/box';
export declare class Some<X> implements Optional<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (x: X) => Y): Some<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): Y;
    orElse(x: X): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): X;
    isDefined(): boolean;
    isEmpty(): boolean;
    box<Y>(onNone: () => Y, onSome: (x: X) => Y): Box<Y>;
}
export declare const some: <X>(value: X) => Some<X>;
