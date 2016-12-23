import {Box} from "./Box"

export class Task<E, S> {

    private fork: <F,T>(reject : (E) => F, resolve: (S) => T) => F|T

    constructor(fork : <F,T>(reject : (E) => F, resolve: (S) => T) => F|T) {

        this.fork = fork

    }

    // The success value of the task is mapped.
    map <F, M, N>(f : (S) => M) : Task<E, M>{

        const fork = this.fork

        return new Task<F, M>((reject : (E) => F, resolve: (M) => N) =>

            fork(
                (error : E) => reject(error),
                (success : S) => resolve(f(success))
            )

        )

    }

    // Chain returns a new task.
    // Upon forking the new task, the old task is forked first.
    // The old task is rejected with the new reject function.
    // The result of the first task is mapped before the second task is forked.

    chain<F, C, D>(f : (S) => Task<E, S>) {

        const fork = this.fork;

        return new Task<F, S>((reject : (E) => F, resolve : (S) => D) =>

            fork(
                error => reject(error),
                success => f(success).fork(reject, resolve)
            )
        )

    }

    box<T>(f : (E) => T, g : (S) => T) : Box<T> {

        const fork = this.fork(
            (error : E) => f(error),
            (success : S) => g(success)
        )

        return new Box(fork)
    }

    run (reject : (E) => void, resolve: (S) => void) {

        this.fork(reject, resolve)
    }


}

export const task = <E, F, S, T>(fork : <F,T>(reject : (E) => F, resolve: (S) => T) => F|T) =>

    new Task<E, S>(fork)