interface Optional<X> {

    map<Y>(f : (X) => Y) : Optional<Y>

    run(onSome : (X) => void, onNone : () => void)

    fold<Y>(onSome : (X) => Y, onNone: () => Y)

    orElse(x : X) : Optional<X>

    get() : X|null

}

export default Optional