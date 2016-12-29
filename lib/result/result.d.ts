import { Failure } from "./failure";
export interface Result<F, S> {
    map<T>(f: (S) => T): Result<F, T>;
    chain<T>(f: (S) => T): Failure<F, T> | T;
    fold<F, T>(onError: (E) => F, onSuccess: (S) => T): F | T;
    get(): F | S;
}
