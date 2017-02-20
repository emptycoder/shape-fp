"use strict";
var objects_1 = require("../objects/objects");
var list_1 = require("../list/list");
var pick = require("lodash.pick");
var values = require("lodash.values");
var toPairs = require("lodash.topairs");
var Dictionary = (function () {
    function Dictionary(obj) {
        this.obj = obj;
    }
    Dictionary.prototype.entries = function () {
        return toPairs(this.obj);
    };
    Dictionary.prototype.keys = function () {
        return Object.keys(this.obj);
    };
    Dictionary.prototype.values = function () {
        return values(this.obj);
    };
    Dictionary.prototype.map = function (f) {
        return list_1.list(this.entries())
            .map(function (pair) {
            var key = pair[0], value = pair[1];
            return [key, f(key, value)];
        })
            .box(objects_1.toObject)
            .fold(function (obj) {
            return new Dictionary(obj);
        });
    };
    Dictionary.prototype.chain = function (f) {
        var obj = {};
        this.map(f) // Dictionary<Dictionary<W>>
            .forEach(function (outerKey, dict) {
            dict.forEach(function (key, value) {
                obj[key] = value;
            });
        });
        return new Dictionary(obj);
    };
    Dictionary.prototype.fold = function (f) {
        return list_1.list(this.entries())
            .map(function (pair) {
            var key = pair[0], value = pair[1];
            return [key, f(key, value)];
        })
            .flatten(objects_1.toObject);
    };
    Dictionary.prototype.run = function (f) {
        f(this.obj);
    };
    Dictionary.prototype.forEach = function (f) {
        this.entries().forEach(function (entry) {
            var key = entry[0], value = entry[1];
            f(key, value);
        });
    };
    Dictionary.prototype.pick = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return dictionary(pick(this.obj, keys));
    };
    Dictionary.prototype.get = function () {
        return this.obj;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
function dictionary(obj) {
    return new Dictionary(obj);
}
exports.dictionary = dictionary;
//# sourceMappingURL=dictionary.js.map