import { Result } from "./result";
export declare class Failure<F, S> implements Result<F, S> {
    private failure;
    constructor(x: F);
    map<T>(f: (S) => T): Failure<F, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): F;
}
export declare const failure: <F, S>(error: F) => Failure<F, S>;
