import groupBy = require('lodash.groupby')
import tail = require('lodash.tail')
import Dictionary from '../object/dictionary'

export const nth = <T>(array : T[], index : number) : T =>

    array[index]

export const indexed = <T>(array : T[]) : [T, number][] =>

    array.map((item, index) => [item, index] as [T, number])

export function groupByFirst<T, K>(array : T[][]) : Dictionary<T> {

    const obj = {}

    for(const tuple of array) {

        const key = tuple[0].toString()

        if(!obj.hasOwnProperty(key)) {
            obj[key] = []
        }

        tail(tuple).forEach(item =>

            obj[key].push(item)

        )

    }

    return obj

}