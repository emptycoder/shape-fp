"use strict";
var task_1 = require("../task/task");
var Failure = (function () {
    function Failure(x) {
        this.failure = x;
    }
    Failure.prototype.map = function (f) {
        return new Failure(this.failure);
    };
    Failure.prototype.chain = function (f) {
        return new Failure(this.failure);
    };
    Failure.prototype.fold = function (onError, onSuccess) {
        return onError(this.failure);
    };
    Failure.prototype.get = function () {
        return this.failure;
    };
    Failure.prototype.run = function (onError, onSuccess) {
        onError(this.failure);
    };
    Failure.prototype.toTask = function () {
        return task_1.rejected(this.failure);
    };
    return Failure;
}());
exports.Failure = Failure;
exports.failure = function (error) { return new Failure(error); };
