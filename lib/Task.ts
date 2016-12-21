import {Fork, Reject, Resolve} from "./Fork"

export class Task<E, S> {

    fork: Fork<E, S>

    constructor(fork : Fork<E, S>) {

        this.fork = fork

    }

    map <T>(f : (S) => T) {

        const fork = this.fork;

        return new Task((reject : Reject<E>, resolve: Resolve<T>) => {

            return fork(
                a => reject(a),
                b => resolve(f(b)))

        })

    }

    chain<T>(f : (S) => Task<E, T>) {

        const fork = this.fork;

        return new Task<E, T>((reject : Reject<E>, resolve : Resolve<T>) =>

            fork(
                error => reject(error),
                success => f(success).fork(reject, resolve)
            )
        )

    }

}

export const task = <E, S>(fork : Fork<E, S>) => new Task(fork)