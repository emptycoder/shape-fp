interface Optional<X> {
    map<Y>(f: (X) => Y): Optional<Y>;
    run(onSome: (X) => void, onNone: () => void): any;
}
export default Optional;
