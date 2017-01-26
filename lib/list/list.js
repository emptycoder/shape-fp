"use strict";
var task_list_1 = require("../task/task_list");
var box_1 = require("../box/box");
var first = require("lodash.first");
var helper_1 = require("../optional/helper");
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
    List.prototype.filter = function (f) {
        return new List(this.xs.filter(f));
    };
    List.prototype.first = function () {
        var x = first(this.xs);
        return helper_1.default(x);
    };
    List.prototype.flatten = function (f) {
        return f(this.xs);
    };
    List.prototype.run = function (f) {
        f(this.xs);
    };
    List.prototype.taskList = function (f) {
        return task_list_1.taskList(this.xs.map(f));
    };
    List.prototype.box = function (f) {
        return box_1.box(f(this.xs));
    };
    return List;
}());
exports.List = List;
exports.list = function (array) { return new List(array); };
//# sourceMappingURL=list.js.map