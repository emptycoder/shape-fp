import { StringValuePair } from '../tuples/pairs';
export declare type StringKeyObject<V> = {
    [index: string]: V;
};
export declare type NumberKeyObject<V> = {
    [index: number]: V;
};
export declare function entries<V>(obj: StringKeyObject<V>): StringValuePair<V>[];
export declare function toObject<V>(entries: StringValuePair<V>[]): StringKeyObject<V>;
