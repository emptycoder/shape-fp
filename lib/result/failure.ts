import {Result} from "./result"
import {Task} from "../task/task"
import {rejected} from "../task/task"

export class Failure<F, S> implements Result<F, S> {

    private failure : F

    constructor(x : F) {

        this.failure = x

    }

    map<T>(f : (s : S) => T) : Result<F, T> {

        return new Failure<F, T>(this.failure)

    }

    chain<T>(f: (s : S) => Result<F, T>): Result<F, T> {

        return new Failure<F, T>(this.failure)

    }

    fold<G, T>(onFailure : (f : F) => G, onSuccess : (s : S) => T) : G {

        return onFailure(this.failure)

    }

    get() : F {

        return this.failure

    }

    run(onFailure: (f : F) => void, onSuccess: (s : S) => void) {

        onFailure(this.failure)

    }

    toTask(): Task<F, S> {

        return rejected<F, S>(this.failure)

    }

}

export const failure = <F, S>(error: F) => new Failure<F, S>(error)