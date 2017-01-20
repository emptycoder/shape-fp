import { Task } from "../task/task";
export interface Result<F, S> {
    map<T>(f: (S) => T): Result<F, T>;
    chain<T>(f: (S) => Result<F, T>): Result<F, T>;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): F | T;
    get(): F | S;
    run(onError: (F) => void, onSuccess: (S) => void): any;
    toTask(): Task<F, S>;
}