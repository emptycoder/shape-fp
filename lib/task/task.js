"use strict";
class Task {
    constructor(fork) {
        this._fork = fork;
    }
    map(f) {
        const previousFork = this._fork;
        return new Task((reject, resolve) => previousFork(failure => reject(failure), success => resolve(f(success))));
    }
    chain(f) {
        const previousFork = this._fork;
        return new Task((reject, resolve) => previousFork(error => reject(error), success => f(success).fork(reject, resolve)));
    }
    orElse(f) {
        const previousFork = this._fork;
        return new Task((reject, resolve) => previousFork(error => f(error).fork(reject, resolve), success => resolve(success)));
    }
    fork(reject = _ => { }, resolve = _ => { }) {
        this._fork(reject, resolve);
    }
    run(f) {
        const previousFork = this._fork;
        return new Task((reject, resolve) => previousFork(failure => reject(failure), success => {
            f(success);
            resolve(success);
        }));
    }
}
exports.Task = Task;
exports.task = (fork) => new Task(fork);
exports.taskFromPromise = (promise) => exports.task((reject, resolve) => promise.then(resolve, reject));
exports.rejected = (failure) => new Task((reject, _) => reject(failure));
exports.resolved = (success) => new Task((_, resolve) => resolve(success));
//# sourceMappingURL=task.js.map