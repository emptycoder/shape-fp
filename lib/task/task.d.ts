import { Fork, Reject, Resolve } from "./fork";
export declare class Task<F, S> {
    private _fork;
    constructor(fork: Fork<F, S>);
    map<T>(f: (S) => T): Task<F, T>;
    run(f: (S) => void): Task<F, S>;
    chain<T>(f: (S) => Task<F, T>): Task<F, T>;
    fork(reject?: Reject<F>, resolve?: Resolve<S>): void;
}
export declare const task: <F, S>(fork: Fork<F, S>) => Task<F, S>;
export declare const taskFromPromise: <T>(promise: any) => Task<{}, {}>;
export declare const rejected: <F, S>(failure: F) => Task<F, S>;
export declare const resolved: <F, S>(success: S) => Task<F, S>;
