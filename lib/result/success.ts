import {Result} from "./result"
import {Failure} from "./failure"
import {Task} from "../task/task"
import {rejected} from "../task/task"
import {resolved} from "../task/task"

export class Success<F, S> implements Result<F, S> {

    private success : S

    constructor(x : S) {

        this.success = x

    }

    map<T>(f : (S) => T) : Result<F, T> {

        return new Success<F, T>(f(this.success))

    }

    chain<T>(f: (S) => Result<F, T>): Result<F, T> {

        return f(this.success)

    }

    fold<F, T>(onError : (F) => T, onSuccess : (S) => T) : T {

        return onSuccess(this.success)

    }

    get() : F|S {

        return this.success

    }

    run(onError: (F) => void, onSuccess: (T) => void) {

        onSuccess(this.success)

    }

    toTask(): Task<F, S> {

        return resolved<F, S>(this.success)

    }

}

export const success = <E, S>(success: S) => new Success<E, S>(success)