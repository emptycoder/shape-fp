interface Optional<X> {
    map<Y>(f: (X) => Y): Optional<Y>;
    fold<Y>(onNone: () => Y, onSome: (X) => Y): any;
    orElse(x: X): Optional<X>;
    get(): X | null;
    getOrDefault(defaultValue: X): any;
}
export default Optional;
