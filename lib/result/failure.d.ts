import { Result } from "./result";
import { Task } from "../task/task";
export declare class Failure<F, S> implements Result<F, S> {
    private failure;
    constructor(x: F);
    map<T>(f: (s: S) => T): Result<F, T>;
    chain<T>(f: (s: S) => Result<F, T>): Result<F, T>;
    fold<G, T>(onFailure: (f: F) => G, onSuccess: (s: S) => T): G;
    get(): F;
    run(onFailure: (f: F) => void, onSuccess: (s: S) => void): void;
    toTask(): Task<F, S>;
}
export declare const failure: <F, S>(error: F) => Failure<F, S>;
