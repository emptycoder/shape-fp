import {none} from "./none"
import {some} from "./some"
import Optional from "./optional"

const optional = <X>(value: X | null) : Optional<X> =>

    value == null ? none<X>() : some(value)

export default optional