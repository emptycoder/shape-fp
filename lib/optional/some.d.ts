import { Box } from '../box/box';
import { Optional } from './optional';
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
    run(onNone: () => void, onSome: (x: X) => void): void;
    box<Y>(onNone: () => Y, onSome: (x: X) => Y): Box<Y>;
}
export declare function some<X>(value: X): Some<X>;
