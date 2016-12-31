"use strict";
var task_1 = require("../task/task");
var Success = (function () {
    function Success(x) {
        this.success = x;
    }
    Success.prototype.map = function (f) {
        return new Success(f(this.success));
    };
    Success.prototype.chain = function (f) {
        return f(this.success);
    };
    Success.prototype.fold = function (onError, onSuccess) {
        return onSuccess(this.success);
    };
    Success.prototype.get = function () {
        return this.success;
    };
    Success.prototype.run = function (onError, onSuccess) {
        onSuccess(this.success);
    };
    Success.prototype.toTask = function () {
        return task_1.resolved(this.success);
    };
    return Success;
}());
exports.Success = Success;
exports.success = function (success) { return new Success(success); };
//# sourceMappingURL=success.js.map