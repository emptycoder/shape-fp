import Dictionary from './dictionary'
import tail = require('lodash.tail')

//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
export function entries <V>(obj : any) : [string, V][] {

    return Object.keys(obj).map(key => [key, obj[key]] as [string, V])

}

export function mapValues<I, O>(input : Dictionary<I>, f : (key : string, value : I) => O) : Dictionary<O> {

    const newObject = {}

    for(const key of Object.keys(input)) {

        newObject[key] = f(key, input[key])
    }

    return newObject as Dictionary<O>

}

export function fromPairs <T>(pairs : [string, T][]) : Dictionary<T> {

    const obj : Dictionary<T> = {}

    pairs
        .forEach(pair => {

            const [key, value] = pair

            obj[key] = value

        })

    return obj

}

export function groupPairsByFirst<A, B>(array : [string, B][]) : Dictionary<B[]> {

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