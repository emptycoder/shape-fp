/// <reference types="core-js" />
import { Fork, Reject, Resolve } from './fork';
export declare class Task<F, S> {
    private _fork;
    constructor(fork: Fork<F, S>);
    map<T>(f: (S) => T): Task<F, T>;
    chain<T>(f: (S) => Task<F, T>): Task<F, T>;
    parallel(f: (S) => Array<Task<F, S>>): Task<F, S[]>;
    orElse<G>(f: (F) => Task<G, S>): Task<G, S>;
    fork(reject?: Reject<F>, resolve?: Resolve<S>): void;
    run(f: (S) => void): Task<F, S>;
}
export declare const task: <F, S>(fork: Fork<F, S>) => Task<F, S>;
export declare const taskFromPromise: <F, S>(promise: Promise<S>) => Task<F, S>;
export declare const taskFromAsynchronousFunction: <F, S>(asynchronousFunction: (callback: (failure: F, success: S) => any) => void) => Task<F, S>;
export declare const rejected: <F, S>(failure: F) => Task<F, S>;
export declare const resolved: <F, S>(success: S) => Task<F, S>;
