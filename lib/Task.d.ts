import { Fork } from "./Fork";
export declare class Task<E, S> {
    fork: Fork<E, S>;
    constructor(fork: Fork<E, S>);
    map<T>(f: (S) => T): Task<E, T>;
    chain<T>(f: (S) => Task<E, T>): Task<E, T>;
}
export declare const task: <E, S>(fork: (reject: (error: E) => void, resolve: (success: S) => void) => void) => Task<E, S>;
