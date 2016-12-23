export interface Result<E, S> {

    map<T>(f : (S) => T) : Result<E, T>

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : F | T

}