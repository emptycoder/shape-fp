import { Result } from "./result";
import { Task } from "../task/task";
export declare class Success<F, S> implements Result<F, S> {
    private success;
    constructor(x: S);
    map<T>(f: (S) => T): Result<F, T>;
    chain<T>(f: (S) => Result<F, T>): Result<F, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): T;
    get(): F | S;
    toTask(): Task<F, S>;
}
export declare const success: <E, S>(success: S) => Success<E, S>;
