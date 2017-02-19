import { StringKeyObject } from '../object/object';
import { StringValuePair } from '../object/pair';
export declare class Dictionary<V> {
    private pairs;
    constructor(pairs: StringValuePair<V>[]);
    entries(): StringValuePair<V>[];
    keys(): string[];
    values(): V[];
    map<W>(f: (key: string, value: V) => W): Dictionary<W>;
}
export declare function dictionary<V>(pairs: StringValuePair<V>[]): Dictionary<V>;
export declare function dictionary<V>(object: StringKeyObject<V>): Dictionary<V>;
