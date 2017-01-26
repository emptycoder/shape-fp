interface Optional<X> {

    map<Y>(f : (x : X) => Y) : Optional<Y>

    fold<Y>(onNone: () => Y, onSome : (x : X) => Y)

    orElse(x : X) : Optional<X>

    get() : X|null

    getOrDefault(defaultValue : X)

    isDefined() : boolean

    isEmpty() : boolean

}

export default Optional