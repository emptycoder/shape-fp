import { Task } from "../task/task";
export interface Result<F, S> {
    map<T>(f: (s: S) => T): Result<F, T>;
    chain<T>(f: (s: S) => Result<F, T>): Result<F, T>;
    fold<G, T>(onFailure: (f: F) => G, onSuccess: (s: S) => T): G | T;
    get(): F | S;
    run(onFailure: (f: F) => void, onSuccess: (s: S) => void): any;
    toTask(): Task<F, S>;
}
