import { Fork } from "./Fork";
export declare class Task<F, S> {
    fork: Fork<F, S>;
    constructor(fork: Fork<F, S>);
    map<T>(f: (S) => T): Task<F, T>;
    chain<T>(f: (S) => Task<F, T>): Task<F, T>;
}
export declare const task: <E, S>(fork: (reject: (failure: E) => void, resolve: (success: S) => void) => void) => Task<E, S>;
