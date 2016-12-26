interface Optional<X> {

    map<Y>(f : (X) => Y) : Optional<Y>

}

export default Optional