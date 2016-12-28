"use strict";
var Task = (function () {
    function Task(fork) {
        this._fork = fork;
    }
    Task.prototype.map = function (f) {
        var fork = this._fork;
        return new Task(function (reject, resolve) {
            return fork(function (failure) { return reject(failure); }, function (success) { return resolve(f(success)); });
        });
    };
    Task.prototype.run = function (f) {
        var fork = this._fork;
        return new Task(function (reject, resolve) {
            return fork(function (failure) { return reject(failure); }, function (success) {
                f(success);
                resolve(success);
            });
        });
    };
    Task.prototype.chain = function (f) {
        var fork = this._fork;
        return new Task(function (reject, resolve) {
            return fork(function (error) { return reject(error); }, function (success) { return f(success)._fork(reject, resolve); });
        });
    };
    Task.prototype.fork = function (reject, resolve) {
        if (reject === void 0) { reject = function (_) { }; }
        if (resolve === void 0) { resolve = function (_) { }; }
        this._fork(reject, resolve);
    };
    return Task;
}());
exports.Task = Task;
exports.task = function (fork) { return new Task(fork); };
exports.taskFromPromise = function (promise) { return exports.task(function (reject, resolve) { return promise.then(resolve, reject); }); };
exports.rejected = function (failure) { return new Task(function (reject, _) { return reject(failure); }); };
exports.resolved = function (success) { return new Task(function (_, resolve) { return resolve(success); }); };
