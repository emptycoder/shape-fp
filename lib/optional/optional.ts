interface Optional<X> {

    map<Y>(f : (X) => Y) : Optional<Y>

    fold<Y>(onNone: () => Y, onSome : (X) => Y)

    orElse(x : X) : Optional<X>

    get() : X|null

    getOrDefault(defaultValue : X)

}

export default Optional