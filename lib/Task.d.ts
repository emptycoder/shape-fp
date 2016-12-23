import { Box } from "./Box";
export declare class Task<E, S> {
    private fork;
    constructor(fork: <F, T>(reject: (E) => F, resolve: (S) => T) => F | T);
    map<F, M, N>(f: (S) => M): Task<E, M>;
    chain<F, C, D>(f: (S) => Task<E, S>): Task<F, S>;
    box<T>(f: (E) => T, g: (S) => T): Box<T>;
    run(reject: (E) => void, resolve: (S) => void): void;
}
export declare const task: <E, F, S, T>(fork: <F, T>(reject: (E: any) => F, resolve: (S: any) => T) => F | T) => Task<E, S>;
