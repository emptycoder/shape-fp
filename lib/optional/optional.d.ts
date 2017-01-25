interface Optional<X> {
    map<Y>(f: (x: X) => Y): Optional<Y>;
    fold<Y>(onNone: () => Y, onSome: (x: X) => Y): any;
    orElse(x: X): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): any;
}
export default Optional;
