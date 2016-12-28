import { Result } from "./result";
export declare class Success<F, S> implements Result<F, S> {
    private success;
    constructor(x: S);
    map<T>(f: (S) => T): Success<F, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): T;
}
export declare const success: <E, S>(success: S) => Success<E, S>;
