import {Fork, Reject, Resolve} from "./fork"

export class Task<F, S> {

    fork: Fork<F, S>

    constructor(fork : Fork<F, S>) {

        this.fork = fork

    }

    map <T>(f : (S) => T) : Task<F, T> {

        const fork = this.fork;

        return new Task((reject : Reject<F>, resolve: Resolve<T>) => {

            return fork(
                failure => reject(failure),
                success => resolve(f(success)))

        })

    }

    chain<T>(f : (S) => Task<F, T>) {

        const fork = this.fork;

        return new Task<F, T>((reject : Reject<F>, resolve : Resolve<T>) =>

            fork(
                error => reject(error),
                success => f(success).fork(reject, resolve)
            )
        )

    }

}

export const task = <F, S>(fork : Fork<F, S>) => new Task(fork)

export const rejected = <F, S>(failure : F) => new Task<F, S>((reject, _) => reject(failure))

export const resolved = <F, S>(success : S) => new Task<F, S>((_, resolve) => resolve(success))