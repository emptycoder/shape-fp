"use strict";
var Task = (function () {
    function Task(task) {
        this.task = task;
    }
    Task.prototype.map = function (f) {
        var _this = this;
        return new Task(function () { return _this.task().map(f); });
    };
    Task.prototype.fold = function (onError, onSuccess) {
        return this.task().fold(onError, onSuccess);
    };
    Task.prototype.pairBy = function (f) {
        var _this = this;
        return new Task(function () { return _this.task().pairBy(f); });
    };
    return Task;
}());
exports.Task = Task;
exports.task = function (task) { return new Task(task); };
