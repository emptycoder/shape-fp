"use strict";
function createTaskWaterfall() {
    return new TaskWaterfallFactory();
}
exports.createTaskWaterfall = createTaskWaterfall;
var TaskWaterfallFactory = (function () {
    function TaskWaterfallFactory() {
    }
    TaskWaterfallFactory.prototype.using = function (f) {
        return new UsingTaskWaterfallFactory(f);
    };
    return TaskWaterfallFactory;
}());
exports.TaskWaterfallFactory = TaskWaterfallFactory;
var UsingTaskWaterfallFactory = (function () {
    function UsingTaskWaterfallFactory(f) {
        this.f = f;
    }
    UsingTaskWaterfallFactory.prototype.times = function (times) {
        return new QuantifiedUsingTaskWaterfallFactory(this.f, times);
    };
    return UsingTaskWaterfallFactory;
}());
exports.UsingTaskWaterfallFactory = UsingTaskWaterfallFactory;
var QuantifiedUsingTaskWaterfallFactory = (function () {
    function QuantifiedUsingTaskWaterfallFactory(f, times) {
        this.f = f;
        this.times = times;
    }
    QuantifiedUsingTaskWaterfallFactory.prototype.startingWith = function (value) {
        var waterfall = this.f(value);
        for (var i = 1; i < this.times; i++) {
            waterfall = waterfall
                .chain(this.f);
        }
        return waterfall;
    };
    return QuantifiedUsingTaskWaterfallFactory;
}());
exports.QuantifiedUsingTaskWaterfallFactory = QuantifiedUsingTaskWaterfallFactory;
//# sourceMappingURL=waterfall.js.map