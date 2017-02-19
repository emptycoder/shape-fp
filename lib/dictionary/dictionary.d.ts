import { StringKeyObject } from '../objects/objects';
import { StringValuePair } from '../objects/pair';
export declare class Dictionary<V> {
    private obj;
    constructor(obj: StringKeyObject<V>);
    entries(): StringValuePair<V>[];
    keys(): string[];
    values(): V[];
    map<W>(f: (key: string, value: V) => W): Dictionary<W>;
    pick(...keys: string[]): Dictionary<V>;
    get(): StringKeyObject<V>;
}
export declare function dictionary<V>(obj: StringKeyObject<V>): Dictionary<V>;
