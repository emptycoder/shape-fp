import {NumberKeyObject, StringKeyObject} from '../objects/objects'
import tail = require('lodash.tail')

export type StringValuePair<V> = [string, V]

export type NumberValuePair<V> = [number, V]

function groupPairs<V>(array : (StringValuePair<V>|NumberValuePair<V>)[]) : {} {

    const obj = {}

    for(const tuple of array) {

        const key = tuple[0]

        if(!obj.hasOwnProperty(key)) {
            obj[key] = []
        }

        tail<V>(tuple as [any, V]).forEach(item =>

            obj[key].push(item)

        )

    }

    return obj

}

export function groupStringValuePairs<V>(pairs : StringValuePair<V>[]) : StringKeyObject<V[]> {

    return groupPairs(pairs)

}

export function groupNumberValuePairs<V>(pairs : NumberValuePair<V>[]) : NumberKeyObject<V[]> {

    return groupPairs(pairs)

}