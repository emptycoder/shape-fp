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
                a => reject(a),
                b => resolve(f(b)))

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

export const task = <E, S>(fork : Fork<E, S>) => new Task(fork)