"use strict";
var task_1 = require("./task");
var parallel = require("run-parallel");
var series = require("run-series");
var TaskList = (function () {
    function TaskList(tasks) {
        this.tasks = tasks.map(function (task) {
            return function (callback) { return task.fork(function (rejected) { return callback(rejected, null); }, function (resolved) { return callback(null, resolved); }); };
        });
    }
    TaskList.prototype.createCallback = function (reject, resolve) {
        return function (err, results) {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        };
    };
    TaskList.prototype.series = function () {
        var _this = this;
        return task_1.task(function (reject, resolve) {
            return series(_this.tasks, _this.createCallback(reject, resolve));
        });
    };
    TaskList.prototype.parallel = function () {
        var _this = this;
        return task_1.task(function (reject, resolve) {
            return parallel(_this.tasks, _this.createCallback(reject, resolve));
        });
    };
    return TaskList;
}());
exports.TaskList = TaskList;
exports.taskList = function (tasks) { return new TaskList(tasks); };
//# sourceMappingURL=task_list.js.map