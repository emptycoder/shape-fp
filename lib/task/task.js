"use strict";
var Task = (function () {
    function Task(fork) {
        this.fork = fork;
    }
    Task.prototype.map = function (f) {
        var fork = this.fork;
        return new Task(function (reject, resolve) {
            return fork(function (a) { return reject(a); }, function (b) { return resolve(f(b)); });
        });
    };
    Task.prototype.chain = function (f) {
        var fork = this.fork;
        return new Task(function (reject, resolve) {
            return fork(function (error) { return reject(error); }, function (success) { return f(success).fork(reject, resolve); });
        });
    };
    return Task;
}());
exports.Task = Task;
exports.task = function (fork) { return new Task(fork); };
