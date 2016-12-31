"use strict";
const task_1 = require("../task/task");
class Failure {
    constructor(x) {
        this.failure = x;
    }
    map(f) {
        return new Failure(this.failure);
    }
    chain(f) {
        return new Failure(this.failure);
    }
    fold(onError, onSuccess) {
        return onError(this.failure);
    }
    get() {
        return this.failure;
    }
    run(onError, onSuccess) {
        onError(this.failure);
    }
    toTask() {
        return task_1.rejected(this.failure);
    }
}
exports.Failure = Failure;
exports.failure = (error) => new Failure(error);
//# sourceMappingURL=failure.js.map