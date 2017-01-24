//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
export const entries = <R>(obj : any) : [string, R][] =>

    Object.keys(obj).map(key => [key, obj[key]] as [string, R])