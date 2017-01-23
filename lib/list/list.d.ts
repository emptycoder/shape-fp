import { Task } from '../task/task';
import { TaskList } from '../task/task_list';
export declare class List<X> {
    private xs;
    constructor(xs: X[]);
    map<Y>(f: (X) => Y): List<Y>;
    chain<Y>(f: (X) => List<Y>): List<Y>;
    fold<Y>(f: (X) => Y): Y[];
    get(): X[];
    run(f: (array: X[]) => void): void;
    taskList<F, S>(f: (X) => Task<F, S>): TaskList<F, S>;
}
export declare const list: <X>(array: X[]) => List<X>;
