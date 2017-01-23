"use strict";
var array_1 = require("../array/array");
var task_1 = require("./task");
var parallel = require("run-parallel");
var TaskList = (function () {
    function TaskList(tasks) {
        this.tasks = tasks;
    }
    TaskList.prototype.series = function () {
        return array_1.tail(this.tasks)
            .reduce(function (series, task) {
            return series.chain(function () { return task; });
        }, array_1.head(this.tasks));
    };
    TaskList.prototype.parallel = function () {
        var _this = this;
        return task_1.task(function (reject, resolve) {
            return parallel(_this.tasks.map(function (task) {
                return function (callback) { return task.fork(function (rejected) { return callback(rejected, null); }, function (resolved) { return callback(null, resolved); }); };
            }), function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return TaskList;
}());
exports.TaskList = TaskList;
exports.taskList = function (tasks) { return new TaskList(tasks); };
//# sourceMappingURL=task_list.js.map