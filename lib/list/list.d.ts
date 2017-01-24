import { Task } from '../task/task';
import { TaskList } from '../task/task_list';
import { Box } from '../box/box';
export declare class List<X> {
    private xs;
    constructor(xs: X[]);
    map<Y>(f: (X) => Y): List<Y>;
    chain<Y>(f: (X) => List<Y>): List<Y>;
    fold<Y>(f: (X) => Y): Y[];
    get(): X[];
    flatten<Y>(f: (xs: X[]) => Y): Y;
    run(f: (array: X[]) => void): void;
    taskList<F, S>(f: (X) => Task<F, S>): TaskList<F, S>;
    box<Y>(f: (xs: X[]) => Y): Box<Y>;
}
export declare const list: <X>(array: X[]) => List<X>;
