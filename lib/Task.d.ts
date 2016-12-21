import { Result } from "./Result";
export declare class Task<E, S> {
    private task;
    constructor(task: () => Result<E, S>);
    map<T>(f: (S) => T): Task<E, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): F | T;
    pairBy<T>(f: (S) => T): Task<E, [S, T]>;
}
export declare const task: <E, S>(task: () => Result<E, S>) => Task<E, S>;
