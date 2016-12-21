import {Result} from "./Result"

export class Task<E, S> {

    private task: () => Result<E, S>

    constructor(task : () => Result<E, S>) {

        this.task = task

    }

    map<T>(f : (S) => T) : Task<E, T> {

        return new Task<E, T>(() => this.task().map(f))

    }

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : F|T {

        return this.task().fold(onError, onSuccess)

    }

    pairBy<T>(f : (S) => T) : Task<E, [S, T]> {

        return new Task<E, [S, T]>(() => this.task().pairBy(f))

    }


}

export const task = <E, S>(task : () => Result<E, S>) => new Task(task)