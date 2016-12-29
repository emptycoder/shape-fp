import { Result } from "./result";
import { Task } from "../task/task";
export declare class Failure<F, S> implements Result<F, S> {
    private failure;
    constructor(x: F);
    map<T>(f: (S) => T): Result<F, T>;
    chain<T>(f: (S) => Result<F, T>): Result<F, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): F;
    get(): F | S;
    run(onError: (F) => void, onSuccess: (T) => void): void;
    toTask(): Task<F, S>;
}
export declare const failure: <F, S>(error: F) => Failure<F, S>;
