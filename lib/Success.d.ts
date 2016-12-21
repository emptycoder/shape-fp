import { Result } from "./Result";
export declare class Success<E, S> implements Result<E, S> {
    private success;
    constructor(x: S);
    map<T>(f: (S) => T): Success<E, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): T;
    pairBy<T>(f: (S) => T): Success<E, [S, T]>;
}
export declare const success: <E, S>(success: S) => Success<E, S>;
