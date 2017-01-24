"use strict";
var task_list_1 = require("../task/task_list");
var List = (function () {
    function List(xs) {
        this.xs = xs;
    }
    List.prototype.map = function (f) {
        return new List(this.xs.map(f));
    };
    List.prototype.chain = function (f) {
        return f(this.xs);
    };
    List.prototype.fold = function (f) {
        return this.xs.map(f);
    };
    List.prototype.get = function () {
        return this.xs;
    };
    List.prototype.run = function (f) {
        f(this.xs);
    };
    List.prototype.taskList = function (f) {
        return task_list_1.taskList(this.xs.map(f));
    };
    List.prototype.flatten = function (f) {
        return f(this.xs);
    };
    return List;
}());
exports.List = List;
exports.list = function (array) { return new List(array); };
//# sourceMappingURL=list.js.map