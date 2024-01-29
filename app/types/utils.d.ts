export type ItemType<T> = T extends Readonly<Array<infer R>> ? ItemType<R> : T

export type IsNumberType<T> = T extends number ? true : false
