interface Optional<X> {

    map<Y>(f : (X) => Y) : Optional<Y>

    run(onNone : () => void, onSome : (X) => void)

    fold<Y>(onNone: () => Y, onSome : (X) => Y)

    orElse(x : X) : Optional<X>

    get() : X|null

}

export default Optional