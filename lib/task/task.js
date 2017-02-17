"use strict";
var Task = (function () {
    function Task(fork) {
        this._fork = fork;
    }
    Task.prototype.map = function (f) {
        var previousFork = this._fork;
        return new Task(function (reject, resolve) {
            return previousFork(function (failure) { return reject(failure); }, function (success) { return resolve(f(success)); });
        });
    };
    Task.prototype.chain = function (f) {
        var previousFork = this._fork;
        return new Task(function (reject, resolve) {
            return previousFork(function (failure) { return reject(failure); }, function (success) { return f(success).fork(reject, resolve); });
        });
    };
    Task.prototype.orElse = function (f) {
        var previousFork = this._fork;
        return new Task(function (reject, resolve) {
            return previousFork(function (error) { return f(error).fork(reject, resolve); }, function (success) { return resolve(success); });
        });
    };
    Task.prototype.fork = function (reject, resolve) {
        if (reject === void 0) { reject = function () { }; }
        if (resolve === void 0) { resolve = function () { }; }
        this._fork(reject, resolve);
    };
    Task.prototype.run = function (f) {
        var previousFork = this._fork;
        return new Task(function (reject, resolve) {
            return previousFork(function (failure) { return reject(failure); }, function (success) {
                f(success);
                resolve(success);
            });
        });
    };
    return Task;
}());
exports.Task = Task;
exports.task = function (fork) { return new Task(fork); };
exports.taskFromPromise = function (promise) { return exports.task(function (reject, resolve) { return promise.then(resolve, reject); }); };
exports.taskFromAsynchronousFunction = function (asynchronousFunction) {
    return exports.task(function (reject, resolve) { return asynchronousFunction(function (failure, success) {
        if (failure) {
            reject(failure);
        }
        else {
            resolve(success);
        }
    }); });
};
exports.rejected = function (failure) { return new Task(function (reject, _) { return reject(failure); }); };
exports.resolved = function (success) { return new Task(function (_, resolve) { return resolve(success); }); };
