var randomNumber = function (from) { return function (to) {
    return Math.floor(Math.random() * (to - from)) + from;
}; };
export var nth = function (array, index) {
    return array[index];
};
export var randomIndex = function (array) {
    return randomNumber(0)(array.length);
};
export var randomElement = function (array) {
    return nth(array, randomIndex(array));
};
