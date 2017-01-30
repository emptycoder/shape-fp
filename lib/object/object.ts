//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
export function entries <R>(obj : any) : [string, R][] {

    return Object.keys(obj).map(key => [key, obj[key]] as [string, R])

}

export function mapValues<T, TV, R, RV>(input : T, f : (value : TV) => RV) : R {

    const newObject = {}

    for(const key of Object.keys(input)) {

        newObject[key] = f(input[key])
    }

    return newObject as R

}

export interface Dictionary<T> {
    [index: string]: T;
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