import { StringValuePair } from './pair';
export interface StringKeyObject<V> {
    [index: string]: V;
}
export interface NumberKeyObject<V> {
    [index: number]: V;
}
export declare function entries<V>(obj: StringKeyObject<V>): StringValuePair<V>[];
export declare function toObject<V>(entries: StringValuePair<V>[]): StringKeyObject<V>;
