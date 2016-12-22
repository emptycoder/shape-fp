import {Result} from "./Result"

export class Success<E, S> implements Result<E, S> {

    private success : S

    constructor(x : S) {

        this.success = x

    }

    map<T>(f : (S) => T) : Success<E, T> {

        return new Success<E, T>(f(this.success))

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : T {

        return onSuccess(this.success)

    }

    run(onError : (E) => void, onSuccess : (S) => void) {

        onSuccess(this.success)

    }

}

export const success = <E, S>(success: S) => new Success<E, S>(success)