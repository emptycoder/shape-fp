import Dictionary from './dictionary'

//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
export function entries <V>(obj : any) : [string, V][] {

    return Object.keys(obj).map(key => [key, obj[key]] as [string, V])

}

export function mapValues<I, O>(input : Dictionary<I>, f : (value : I) => O) : Dictionary<O> {

    const newObject = {}

    for(const key of Object.keys(input)) {

        newObject[key] = f(input[key])
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