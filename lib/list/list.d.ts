import { Task } from '../task/task';
import { TaskList } from '../task/task_list';
import { Box } from '../box/box';
import { Dictionary } from '../dictionary/dictionary';
import { Optional } from '../optional/optional';
export declare class List<X> {
    private xs;
    constructor(xs: X[]);
    map<Y>(f: (x: X, index?: number) => Y): List<Y>;
    chain<Y>(f: (x: X) => List<Y>): List<Y>;
    fold<A, Y>(f: (accumulator: A, x: X, index?: number) => A, initial: A): A;
    get(): X[];
    forEach(f: (item: X) => void): void;
    run(f: (array: X[]) => void): void;
    flatten<Y>(f: (xs: X[]) => Y): Y;
    filter(p: (x: X) => boolean): List<X>;
    first(): Optional<X>;
    last(): Optional<X>;
    contains(x: X): boolean;
    indexOf(x: X): Optional<number>;
    find(p: (x: X) => boolean): Optional<X>;
    any(f: (x: X) => boolean): boolean;
    all(f: (x: X) => boolean): boolean;
    associate<Y>(f: (x: X) => Y): List<[X, Y]>;
    groupBy(key: (x: X) => string): Dictionary<X[]>;
    box<Y>(f: (xs: X[]) => Y): Box<Y>;
    taskList<F, S>(f: (x: X) => Task<F, S>): TaskList<F, S>;
}
export declare function list<X>(array: X[]): List<X>;
