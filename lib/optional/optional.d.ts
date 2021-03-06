import { Box } from '../box/box';
export interface Optional<X> {
    map<Y>(f: (x: X) => Y): Optional<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): Y;
    orElse(x: X): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): any;
    isDefined(): boolean;
    isEmpty(): boolean;
    run(onNone: () => void, onSome: (x: X) => void): any;
    box<Y>(onNone: () => Y, onSome: (x: X) => Y): Box<Y>;
}
export declare function optional<X>(value: X | null): Optional<X>;
