"use strict";
var task_list_1 = require("../task/task_list");
var box_1 = require("../box/box");
var find = require("lodash.find");
var first = require("lodash.first");
var last = require("lodash.last");
var indexOf = require("lodash.indexof");
var includes = require("lodash.includes");
var groupBy = require("lodash.groupby");
var flatten = require("lodash.flatten");
var reduce = require("lodash.reduce");
var none_1 = require("../optional/none");
var some_1 = require("../optional/some");
var dictionary_1 = require("../dictionary/dictionary");
var optional_1 = require("../optional/optional");
var List = (function () {
    function List(xs) {
        this.xs = xs;
    }
    List.prototype.map = function (f) {
        return new List(this.xs.map(f));
    };
    List.prototype.chain = function (f) {
        return this
            .map(function (item) { return f(item).get(); }) // List<Y[]>
            .box(function (items) { return flatten(items); }) // Box<Y[]>
            .fold(exports.list); // List<Y>
    };
    List.prototype.fold = function (initial, f) {
        return reduce(this.xs, f, initial);
    };
    List.prototype.get = function () {
        return this.xs;
    };
    List.prototype.forEach = function (f) {
        this.xs.forEach(f);
    };
    List.prototype.run = function (f) {
        f(this.xs);
    };
    List.prototype.flatten = function (f) {
        return f(this.xs);
    };
    List.prototype.filter = function (p) {
        return new List(this.xs.filter(p));
    };
    List.prototype.first = function () {
        return optional_1.optional(first(this.xs));
    };
    List.prototype.last = function () {
        return optional_1.optional(last(this.xs));
    };
    List.prototype.contains = function (x) {
        return includes(this.xs, x);
    };
    List.prototype.indexOf = function (x) {
        return box_1.box(indexOf(this.xs, x))
            .fold(function (index) { return index == -1 ? none_1.none() : some_1.some(index); });
    };
    List.prototype.find = function (p) {
        return optional_1.optional(find(this.xs, p));
    };
    List.prototype.any = function (f) {
        for (var _i = 0, _a = this.xs; _i < _a.length; _i++) {
            var x = _a[_i];
            if (f(x)) {
                return true;
            }
        }
        return false;
    };
    List.prototype.all = function (f) {
        for (var _i = 0, _a = this.xs; _i < _a.length; _i++) {
            var x = _a[_i];
            if (f(x)) {
                return false;
            }
        }
        return true;
    };
    List.prototype.associate = function (f) {
        return this.map(function (x) {
            return [x, f(x)];
        });
    };
    List.prototype.groupBy = function (key) {
        return dictionary_1.dictionary(groupBy(this.xs, key));
    };
    List.prototype.box = function (f) {
        return box_1.box(f(this.xs));
    };
    List.prototype.taskList = function (f) {
        return task_list_1.taskList(this.xs.map(f));
    };
    return List;
}());
exports.List = List;
exports.list = function (array) { return new List(array); };
//# sourceMappingURL=list.js.map