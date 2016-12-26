import {Result} from "./result"

export class Success<F, S> implements Result<F, S> {

    private success : S

    constructor(x : S) {

        this.success = x

    }

    map<T>(f : (S) => T) : Success<F, T> {

        return new Success<F, T>(f(this.success))

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : T {

        return onSuccess(this.success)

    }

}

export const success = <E, S>(success: S) => new Success<E, S>(success)