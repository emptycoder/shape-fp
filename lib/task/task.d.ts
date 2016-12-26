import { Fork } from "./fork";
export declare class Task<F, S> {
    fork: Fork<F, S>;
    constructor(fork: Fork<F, S>);
    map<T>(f: (S) => T): Task<F, T>;
    chain<T>(f: (S) => Task<F, T>): Task<F, T>;
}
export declare const task: <E, S>(fork: Fork<E, S>) => Task<E, S>;
