var forward = function (f, g) {
    return function (x) { return g(f(x)); };
};
export default forward;
