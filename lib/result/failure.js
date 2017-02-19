"use strict";
var task_1 = require("../task/task");
var Failure = (function () {
    function Failure(failure) {
        this.failure = failure;
    }
    Failure.prototype.map = function (f) {
        return new Failure(this.failure);
    };
    Failure.prototype.chain = function (f) {
        return new Failure(this.failure);
    };
    Failure.prototype.fold = function (onFailure, onSuccess) {
        return onFailure(this.failure);
    };
    Failure.prototype.get = function () {
        return this.failure;
    };
    Failure.prototype.run = function (onFailure, onSuccess) {
        onFailure(this.failure);
    };
    Failure.prototype.toTask = function () {
        return task_1.rejected(this.failure);
    };
    return Failure;
}());
exports.Failure = Failure;
exports.failure = function (error) { return new Failure(error); };
//# sourceMappingURL=failure.js.map