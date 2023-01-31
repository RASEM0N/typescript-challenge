// проверим Readonly
{
    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    const todo: MediumTS.Readonly<Todo, 'title' | 'description'> = {
        title: 'Hey',
        description: 'foobar',
        completed: false,
    }

    todo.completed = true;
    // todo.title = '123';       // : Cannot assign to 'title' because it is a read-only property.
    // todo.description = '123'; // : Cannot assign to 'description' because it is a read-only property.
}

// проверим глубокое readonly
{
    type X = {
        x: {
            a: 1
            b: 'hi'
        }
        y: 'hey'
    }

    const x: MediumTS.DeepReadonly<X> = {
        x: {
            a: 1,
            b: 'hi',
        },
        y: 'hey'
    };

    // x.x = 1;     // Cannot assign to 'x' because it is a read-only property.
    // x.x.a = 133; // Cannot assign to 'a' because it is a read-only property.
}

// уберем последний элемент из массива
{
    type Pop = MediumTS.Pop<[1, 2, 'a', 3]>;
    const x: Pop = [1, 2, 'a'];
}

// проверим типизацию PromiseAll
{
    type PromiseAllReturn = MediumTS.ReturnType<MediumTS.PromiseAll<[
        Promise<number>,
        Promise<string>,
        Promise<number>,
    ]>>

    const am: PromiseAllReturn = Promise.resolve([1, 'b', 2]);
}