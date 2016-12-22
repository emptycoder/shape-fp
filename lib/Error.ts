import {Result} from "./Result"

export class Error<E, S> implements Result<E, S> {

    private error : E

    constructor(x : E) {

        this.error = x

    }

    map<T>(f : (S) => T) : Error<E, T> {

        return new Error<E, T>(this.error)

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : F {

        return onError(this.error)

    }

    run(onError : (E) => void, onSuccess : (S) => void) {

        onError(this.error)

    }

}

export const error = <E, S>(error: E) => new Error<E, S>(error)