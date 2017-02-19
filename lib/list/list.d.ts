import { Task } from '../task/task';
import { TaskList } from '../task/task_list';
import { Box } from '../box/box';
import Optional from '../optional/optional';
import { Dictionary } from '../dictionary/dictionary';
export declare class List<X> {
    private xs;
    constructor(xs: X[]);
    map<Y>(f: (x: X) => Y): List<Y>;
    mapIndexed<Y>(f: (x: X, i: number) => Y): List<Y>;
    chain<Y>(f: (x: X[]) => List<Y>): List<Y>;
    fold<Y>(f: (x: X) => Y): Y[];
    get(): X[];
    filter(p: (x: X) => boolean): List<X>;
    first(): Optional<X>;
    last(): Optional<X>;
    indexOf(x: X): Optional<number>;
    find(p: (x: X) => boolean): Optional<X>;
    contains(x: X): boolean;
    any(f: (x: X) => boolean): boolean;
    associate<Y>(f: (x: X) => Y): List<[X, Y]>;
    groupBy(key: (x: X) => string): Dictionary<X[]>;
    flatten<Y>(f: (xs: X[]) => Y): Y;
    run(f: (array: X[]) => void): void;
    taskList<F, S>(f: (x: X) => Task<F, S>): TaskList<F, S>;
    box<Y>(f: (xs: X[]) => Y): Box<Y>;
}
export declare const list: <X>(array: X[]) => List<X>;
