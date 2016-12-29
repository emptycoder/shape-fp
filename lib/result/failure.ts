import {Result} from "./result"
import {Task} from "../task/task"
import {rejected} from "../task/task"

export class Failure<F, S> implements Result<F, S> {

    private failure : F

    constructor(x : F) {

        this.failure = x

    }

    map<T>(f : (S) => T) : Result<F, T> {

        return new Failure<F, T>(this.failure)

    }

    chain<T>(f: (S) => Result<F, T>): Result<F, T> {

        return new Failure<F, T>(this.failure)

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : F {

        return onError(this.failure)

    }

    get() : F|S {

        return this.failure

    }

    run(onError: (F) => void, onSuccess: (T) => void) {

        onError(this.failure)

    }

    toTask(): Task<F, S> {

        return rejected<F, S>(this.failure)

    }

}

export const failure = <F, S>(error: F) => new Failure<F, S>(error)