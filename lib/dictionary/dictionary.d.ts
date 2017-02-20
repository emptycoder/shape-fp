import { StringKeyObject } from '../objects/objects';
import { StringValuePair } from '../pairs/pairs';
export declare class Dictionary<V> {
    private obj;
    constructor(obj: StringKeyObject<V>);
    entries(): StringValuePair<V>[];
    keys(): string[];
    values(): V[];
    map<W>(f: (key: string, value: V) => W): Dictionary<W>;
    chain<W>(f: (key: string, value: V) => Dictionary<W>): Dictionary<W>;
    fold<W>(f: (key: string, value: V) => W): StringKeyObject<W>;
    run(f: (obj: StringKeyObject<V>) => void): void;
    forEach(f: (key: string, value: V) => void): void;
    pick(...keys: string[]): Dictionary<V>;
    get(): StringKeyObject<V>;
}
export declare function dictionary<V>(obj: StringKeyObject<V>): Dictionary<V>;
