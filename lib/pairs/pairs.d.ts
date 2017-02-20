import { NumberKeyObject, StringKeyObject } from '../objects/objects';
export declare type StringValuePair<V> = [string, V];
export declare type NumberValuePair<V> = [number, V];
export declare function groupStringValuePairs<V>(pairs: StringValuePair<V>[]): StringKeyObject<V[]>;
export declare function groupNumberValuePairs<V>(pairs: NumberValuePair<V>[]): NumberKeyObject<V[]>;
