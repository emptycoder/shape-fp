import { Task } from './task';
export declare function createTaskWaterfall<F, S>(): TaskWaterfallFactory<F, S>;
export declare class TaskWaterfallFactory<F, S> {
    using(f: (s: S) => Task<F, S>): UsingTaskWaterfallFactory<F, S>;
}
export declare class UsingTaskWaterfallFactory<F, S> {
    private f;
    constructor(f: (s: S) => Task<F, S>);
    times(times: number): QuantifiedUsingTaskWaterfallFactory<F, S>;
}
export declare class QuantifiedUsingTaskWaterfallFactory<F, S> {
    private f;
    private times;
    constructor(f: (s: S) => Task<F, S>, times: number);
    startingWith(value: S): Task<F, S>;
}
