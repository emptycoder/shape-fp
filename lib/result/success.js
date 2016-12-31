"use strict";
const task_1 = require("../task/task");
class Success {
    constructor(x) {
        this.success = x;
    }
    map(f) {
        return new Success(f(this.success));
    }
    chain(f) {
        return f(this.success);
    }
    fold(onError, onSuccess) {
        return onSuccess(this.success);
    }
    get() {
        return this.success;
    }
    run(onError, onSuccess) {
        onSuccess(this.success);
    }
    toTask() {
        return task_1.resolved(this.success);
    }
}
exports.Success = Success;
exports.success = (success) => new Success(success);
//# sourceMappingURL=success.js.map