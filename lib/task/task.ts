import {Fork, Reject, Resolve} from "./fork"

export class Task<F, S> {

    private _fork: Fork<F, S>

    constructor(fork : Fork<F, S>) {

        this._fork = fork

    }

    map <T>(f : (S) => T) : Task<F, T> {

        const fork = this._fork

        return new Task((reject : Reject<F>, resolve: Resolve<T>) =>

            fork(
                failure => reject(failure),
                success => resolve(f(success)))

        )

    }

    chain<T>(f : (S) => Task<F, T>) : Task<F, T> {

        const fork = this._fork

        return new Task<F, T>((reject : Reject<F>, resolve : Resolve<T>) =>

            fork(
                error => reject(error),
                success => f(success).fork(reject, resolve)
            )
        )

    }

    orElse<G>(f : (F) => Task<G, S>) : Task<G, S> {

        const fork = this._fork

        return new Task((reject : Reject<G>, resolve: Resolve<S>) =>

            fork(
                (error) => f(error).fork(reject, resolve),
                (success) => resolve(success)
            )

        )

    }

    fork(reject : Reject<F> = _ => {}, resolve : Resolve<S> = _ => {}) {

        this._fork(reject, resolve)

    }

    run (f : (S) => void) : Task<F, S> {

        const fork = this._fork;

        return new Task((reject : Reject<F>, resolve: Resolve<S>) =>

            fork(
                failure => reject(failure),
                success => {

                    f(success)

                    resolve(success)
                })

        )

    }


}

export const task = <F, S>(fork : Fork<F, S>) => new Task(fork)

export const taskFromPromise = <T>(promise : Promise<T>) => task((reject, resolve) => promise.then(resolve, reject))

export const rejected = <F, S>(failure : F) => new Task<F, S>((reject, _) => reject(failure))

export const resolved = <F, S>(success : S) => new Task<F, S>((_, resolve) => resolve(success))