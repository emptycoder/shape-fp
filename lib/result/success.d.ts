import { Result } from "./result";
import { Task } from "../task/task";
export declare class Success<F, S> implements Result<F, S> {
    private success;
    constructor(x: S);
    map<T>(f: (s: S) => T): Result<F, T>;
    chain<T>(f: (s: S) => Result<F, T>): Result<F, T>;
    fold<G, T>(onFailure: (f: F) => G, onSuccess: (s: S) => T): T;
    get(): S;
    run(onError: (f: F) => void, onSuccess: (s: S) => void): void;
    toTask(): Task<F, S>;
}
export declare const success: <F, S>(success: S) => Success<F, S>;
