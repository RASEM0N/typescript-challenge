declare namespace MediumTS {
    // получим тип возвращаемого значения функцией
    type ReturnType<T> = T extends (...params: any) => infer P ? P : never

    // очистим объект от определенных ключей
    type Omit<T extends object, P extends keyof T> = EaseTS.Pick<T, EaseTS.Exclude<keyof T, P>>

    // делаем неизменяемыми только определенные поля объекта
    type Readonly<T extends object, P extends keyof T> = {
        readonly [a in P]: T[a]
    } & Omit<T, P>;

    // делаем все поля readonly
    type DeepReadonly<T extends object> = {
        readonly [k in keyof T]: T[k] extends object ? DeepReadonly<T[k]> : T[k]
    }

    // массив в union type
    type TupleToUnion<T extends any[]> = keyof EaseTS.TupleToObject<T>

    // последний в списке
    type LastArray<T extends any[]> = T extends [...any[], infer P] ? P : never;

    // исключим последний элемент из списка
    type Pop<T extends any[]> = T extends [...infer P, any] ? P : [];

    // затипизированная функция PromiseAll
    // ❗❗❗ Оказывается массива и так можно описать
    // как  [k in keyof T]: T[k] если по нему итерироватся
    type PromiseAll<T extends Promise<any>[]> = (...params: T) => Promise<{
        readonly [k in keyof T]: EaseTS.Awaited<T[k]>
    }>
}
