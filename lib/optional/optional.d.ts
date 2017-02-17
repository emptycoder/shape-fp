import { Box } from '../box/box';
interface Optional<X> {
    map<Y>(f: (x: X) => Y): Optional<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): Y;
    orElse(x: X): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): any;
    isDefined(): boolean;
    isEmpty(): boolean;
    run(f: (x: X) => void): any;
    box<Y>(onNone: () => Y, onSome: (x: X) => Y): Box<Y>;
}
export default Optional;
