import { none } from "./none";
import { some } from "./some";
var optional = function (value) {
    return value == null ? none() : some(value);
};
export default optional;
