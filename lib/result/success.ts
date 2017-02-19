import {Result} from "./result"
import {Task} from "../task/task"
import {resolved} from "../task/task"

export class Success<F, S> implements Result<F, S> {

    constructor(private success : S) {

    }

    map<T>(f : (s : S) => T) : Result<F, T> {

        return new Success<F, T>(f(this.success))

    }

    chain<T>(f: (s : S) => Result<F, T>): Result<F, T> {

        return f(this.success)

    }

    fold<G, T>(onFailure : (f : F) => G, onSuccess : (s : S) => T) : T {

        return onSuccess(this.success)

    }

    get() : S {

        return this.success

    }

    run(onError: (f : F) => void, onSuccess: (s : S) => void) {

        onSuccess(this.success)

    }

    toTask(): Task<F, S> {

        return resolved<F, S>(this.success)

    }

}

export const success = <F, S>(success: S) => new Success<F, S>(success)