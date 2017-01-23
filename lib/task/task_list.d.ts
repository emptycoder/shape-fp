import { Task } from './task';
export declare class TaskList<F, S> {
    private tasks;
    constructor(tasks: Task<F, S>[]);
    series(): Task<F, S>;
    parallel(): Task<F, S[]>;
}
export declare const taskList: <F, S>(tasks: Task<F, S>[]) => TaskList<F, S>;
