"use strict";
var task_list_1 = require("../task/task_list");
var box_1 = require("../box/box");
var find = require("lodash.find");
var first = require("lodash.first");
var last = require("lodash.last");
var indexOf = require("lodash.indexof");
var includes = require("lodash.includes");
var helper_1 = require("../optional/helper");
var none_1 = require("../optional/none");
var some_1 = require("../optional/some");
var List = (function () {
    function List(xs) {
        this.xs = xs;
    }
    List.prototype.map = function (f) {
        return new List(this.xs.map(f));
    };
    List.prototype.mapIndexed = function (f) {
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
    List.prototype.filter = function (p) {
        return new List(this.xs.filter(p));
    };
    List.prototype.first = function () {
        return helper_1.default(first(this.xs));
    };
    List.prototype.last = function () {
        return helper_1.default(last(this.xs));
    };
    List.prototype.indexOf = function (x) {
        return box_1.box(indexOf(this.xs, x))
            .fold(function (index) { return index == -1 ? none_1.none() : some_1.some(index); });
    };
    List.prototype.find = function (p) {
        return helper_1.default(find(this.xs, p));
    };
    List.prototype.contains = function (x) {
        return includes(this.xs, x);
    };
    List.prototype.any = function (f) {
        for (var x in this.xs) {
            if (f(x)) {
                return true;
            }
        }
        return false;
    };
    List.prototype.associate = function (f) {
        return this.map(function (x) {
            return [x, f(x)];
        });
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