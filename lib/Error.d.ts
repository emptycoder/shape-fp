import { Result } from "./Result";
export declare class Error<E, S> implements Result<E, S> {
    private error;
    constructor(x: E);
    map<T>(f: (S) => T): Error<E, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): F;
    pairBy<T>(f: (S) => T): Error<E, [S, T]>;
}
export declare const error: <E, S>(error: E) => Error<E, S>;
