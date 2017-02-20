import { Box } from '../box/box';
import { Optional } from './optional';
export declare class None<X> implements Optional<X> {
    map<Y>(f: (x: X) => Y): None<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): Y;
    orElse(x: X | null): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): X;
    isDefined(): boolean;
    isEmpty(): boolean;
    run(onNone: () => void, onSome: (x: X) => void): void;
    box<Y>(onNone: () => Y, onSome: (x: X) => Y): Box<Y>;
}
export declare function none<X>(): None<X>;
