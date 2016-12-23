"use strict";
var Box_1 = require("./Box");
var Task = (function () {
    function Task(fork) {
        this.fork = fork;
    }
    // The success value of the task is mapped.
    Task.prototype.map = function (f) {
        var fork = this.fork;
        return new Task(function (reject, resolve) {
            return fork(function (error) { return reject(error); }, function (success) { return resolve(f(success)); });
        });
    };
    // Chain returns a new task.
    // Upon forking the new task, the old task is forked first.
    // The old task is rejected with the new reject function.
    // The result of the first task is mapped before the second task is forked.
    Task.prototype.chain = function (f) {
        var fork = this.fork;
        return new Task(function (reject, resolve) {
            return fork(function (error) { return reject(error); }, function (success) { return f(success).fork(reject, resolve); });
        });
    };
    Task.prototype.box = function (f, g) {
        var fork = this.fork(function (error) { return f(error); }, function (success) { return g(success); });
        return new Box_1.Box(fork);
    };
    Task.prototype.run = function (reject, resolve) {
        this.fork(reject, resolve);
    };
    return Task;
}());
exports.Task = Task;
exports.task = function (fork) {
    return new Task(fork);
};
