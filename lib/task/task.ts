import {Fork, Reject, Resolve} from './fork'
import parallel = require('run-parallel')

export class Task<F, S> {

    constructor(private _fork : Fork<F, S>) {

    }

    map <T>(f : (s : S) => T) : Task<F, T> {

        const previousFork = this._fork

        return new Task((reject : Reject<F>, resolve: Resolve<T>) =>

            previousFork(
                failure => reject(failure),
                success => resolve(f(success)))

        )

    }

    chain<T>(f : (s : S) => Task<F, T>) : Task<F, T> {

        const previousFork = this._fork

        return new Task<F, T>((reject : Reject<F>, resolve : Resolve<T>) =>

            previousFork(
                failure => reject(failure),
                success => f(success).fork(reject, resolve)
            )
        )

    }

    orElse<G>(f : (f : F) => Task<G, S>) : Task<G, S> {

        const previousFork = this._fork

        return new Task<G, S>((reject : Reject<G>, resolve: Resolve<S>) =>

            previousFork(
                error => f(error).fork(reject, resolve),
                success => resolve(success)
            )

        )

    }

    fork(reject : Reject<F> = () => {}, resolve : Resolve<S> = () => {}) {

        this._fork(reject, resolve)

    }

    run (f : (s : S) => void) : Task<F, S> {

        const previousFork = this._fork

        return new Task((reject : Reject<F>, resolve: Resolve<S>) =>

            previousFork(
                failure => reject(failure),
                success => {

                    f(success)

                    resolve(success)

                })

        )

    }


}

export const task = <F, S>(fork : Fork<F, S>) => new Task(fork)

export const taskFromPromise = <F, S>(promise : Promise<S>) => task<F, S>((reject, resolve) => promise.then(resolve, reject))

export const taskFromAsynchronousFunction = <F, S>(asynchronousFunction : (callback : (failure : F, success : S) => any) => void) : Task<F, S> =>

    task<F, S>((reject, resolve) => asynchronousFunction((failure : F, success : S) => {

        if(failure) {

            reject(failure)

        }
        else {

            resolve(success)

        }

    }))


export const rejected = <F, S>(failure : F) => new Task<F, S>((reject, _) => reject(failure))

export const resolved = <F, S>(success : S) => new Task<F, S>((_, resolve) => resolve(success))