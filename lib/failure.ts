import {Result} from "./Result"

export class Failure<F, S> implements Result<F, S> {

    private failure : F

    constructor(x : F) {

        this.failure = x

    }

    map<T>(f : (S) => T) : Failure<F, T> {

        return new Failure<F, T>(this.failure)

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : F {

        return onError(this.failure)

    }

}

export const failure = <F, S>(error: F) => new Failure<F, S>(error)