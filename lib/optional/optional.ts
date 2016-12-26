interface Optional<X> {

    map<Y>(f : (X) => Y) : Optional<Y>

    run(onSome : (X) => void, onNone : () => void)

}

export default Optional