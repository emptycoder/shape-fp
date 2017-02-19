import { NumberKeyObject, StringKeyObject } from './object';
import { NumberValuePair, StringValuePair } from './pair';
export declare function groupStringValuePairs<V>(pairs: StringValuePair<V>[]): StringKeyObject<V[]>;
export declare function groupNumberValuePairs<V>(pairs: NumberValuePair<V>[]): NumberKeyObject<V[]>;
