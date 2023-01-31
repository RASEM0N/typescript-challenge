declare namespace EaseTS {
    // вычлиняем определенные свойства объекта
    type Pick<T extends object, P extends keyof T> = {
        [key in P]: T[P]
    }

    // делаем все свойства объекта только для чтения
    type Readonly<T extends object> = {
        readonly [key in keyof T]: T[key]
    }

    // из массива значений преобразуем в объект, где ключ равен значению
    type TupleToObject<T extends readonly any[]> = {
        // преобразование [1,2,3,4,5] в 1|2|3|4|5
        [key in T[number]]: key
    }

    // тип у 1-ого элемента в массиве
    type FirstArray<T extends readonly any[]> = T[0]
    type FirstArrayInfer<T extends any[]> = T extends [infer P, ...any[]] ? P : never

    // мой exclude
    type Exclude<T, P> = T extends P ? never : T

    // мой include
    type Include<T, P> = T extends P ? T : never

    // получим возвращаемый тип в промисе
    type Awaited<T> = T extends Promise<infer P> ? P : never

    // выбираем между двумя типа в зависимости от значение
    type If<T extends boolean, A1, A2> = T extends true ? A1 : A2

    /**
     * -------------------
     * Действия с массивом
     * -------------------
     */

    // склеиваем массивы
    type Concat<T extends any[], P extends any[]> = [...T, ...P]

    // проверим на наличие элемента в массиве
    type Includes<T extends any[], P> = T extends [infer A, ...infer B]
        ? // определяем тип каждого 1-ого элемента массива, элемент A
          // если не нашли по новой ищем совпадение
          P extends A
            ? true
            : Includes<B, P>
        : false;

    // Добавим новый элемент в конец массива
    type Push<T extends any[], P> = [...T, P];

    // Добавим новый элемент в начало массива
    type Unshift<T extends any[], P> = [P, ...T];

    // действия по взятию параметров фунции
    type Parameters<T> = T extends (...params: infer P) => any ? P : never;
}
