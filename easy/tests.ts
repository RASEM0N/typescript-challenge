// Свой Pick
{
    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = EaseTS.Pick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }
}

// Свой Readonly
{
    interface MyTodo {
        title: string
        description: string
    }

    const todo: EaseTS.Readonly<MyTodo> = {
        title: 'Hey',
        description: 'foobar',
    }

    // todo.title = 'Hello' // Error: cannot reassign a readonly property
    // todo.description = 'barFoo' // Error: cannot reassign a readonly property
}

// Преобразование из массива, в объект с ключ значения
{
    const tuple = ['tesla 3', 'model 3', 'model X', 'model Y']
    type result = EaseTS.TupleToObject<typeof tuple>

    const tuple_object: result = {
        'tesla 3': 'tesla 3',
        'model 3': 'model 3',
        'model X': 'model X',
    }
}

// проверим взятие типа 1-ого элемента
{
    type arr1 = ['a', 'b', 'c']
    type arr2 = [3, 2, 1]
    type arr3 = []

    type head1 = EaseTS.FirstArray<arr1> // expected to be 'a'
    type head2 = EaseTS.FirstArray<arr2> // expected to be 3
    type head3 = EaseTS.FirstArray<arr3> // expected to be never

    type head1Infer = EaseTS.FirstArrayInfer<arr1> // expected to be 'a'
    type head2Infer = EaseTS.FirstArrayInfer<arr2> // expected to be 3
    type head3Infer = EaseTS.FirstArrayInfer<arr3> // expected to be never
}

// исключим из Union Type определенные свойства
{
    type exclude = EaseTS.Exclude<'title' | 'title 1', 'title'>
    const exclude: exclude = 'title 1'
}

// достанем из Union Type определнные свойства
{
    type include = EaseTS.Include<'title' | 'title 1', 'title'>
    const include: include = 'title'
}

// Проверим получаемый тип в промиссе
{
    type PromiseString = Promise<string>
    type Awaited = EaseTS.Awaited<PromiseString>

    const text: Awaited = '123';
}

// получим опреденный тип в засимости от истинности условия
{
    const a: EaseTS.If<true, 'a', 'b'> = 'a';
    const b: EaseTS.If<false, 'a', 'b'> = 'b';
}

// склеиваем массивы вместе
{
    type result = EaseTS.Concat<[1, 'a'], [2]>;
    const result: result = [1, 'a', 2];
}

// проверим на наличие элемнта
{
    type isNotHas = EaseTS.Includes<['Kars', 'Santana'], 'Dio'>
    type isHas = EaseTS.Includes<['Kars', 'Dio'], 'Dio'>

    const isNotHas: isNotHas = false;
    const isHas: isHas = true;
}

// добавление нового элемента в массив
{
    const x: EaseTS.Push<[1], 3> = [1, 3];
    const x1: EaseTS.Unshift<[1], 3> = [3, 1];
}

// получение параметров функции
{
    const foo = (a: number, b: string): number => a + + b;
    const fooParams: EaseTS.Parameters<typeof foo> = [1, '01']
}

export {}
