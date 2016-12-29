import {Result} from "./result"
import {Failure} from "./failure"

export class Success<F, S> implements Result<F, S> {

    private success : S

    constructor(x : S) {

        this.success = x

    }

    map<T>(f : (S) => T) : Success<F, T> {

        return new Success<F, T>(f(this.success))

    }

    chain<T>(f: (S) => T): Failure<F, T>|T {

        return f(this.success)

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : T {

        return onSuccess(this.success)

    }

    get() : F|S {

        return this.success

    }

}

export const success = <E, S>(success: S) => new Success<E, S>(success)