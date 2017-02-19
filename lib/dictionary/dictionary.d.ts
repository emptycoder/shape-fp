import { StringKeyObject } from './object';
import { Entry } from './object';
export declare class Dictionary<V> {
    private pairs;
    constructor(pairs: Entry<V>[]);
    entries(): Entry<V>[];
    keys(): string[];
    values(): V[];
    map<W>(f: (key: string, value: V) => W): Dictionary<W>;
}
export declare function dictionary<V>(pairs: [string, V][]): Dictionary<V>;
export declare function dictionary<V>(object: StringKeyObject<V>): Dictionary<V>;
