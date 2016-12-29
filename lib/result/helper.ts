import {success} from "./success"
import {failure} from "./failure"
import {Result} from "./result"

export function tryCatch <F, S>(f : () => S) : Result<F, S> {

    try {

        return success<F, S>(f())

    }
    catch (ex) {

        return failure(ex)

    }

}