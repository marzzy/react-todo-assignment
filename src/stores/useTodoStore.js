import {create} from 'zustand'

const useTodoStore = create((set) => ({
    list: [
        {
            text: 'this is an example',
            completed: true,
        },
        {
            text: 'this is 2nd example',
            completed: false
        }
    ],
    add: (todo) => {
        set((state) => ({
            list: [
                ...state.list,
                {
                    text: todo,
                    completed: false
                }
            ]
        }));
    },
    delete: (index) => {
        set((state) => ({
            list: [
                ...state.list.filter((todo, i) => i !== index)
            ]
        }));
    },
    toggle: (index) => {
        set((state) => ({
            list: state.list.map((todo, i) =>
                i === index
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        }));
    }
}))

export default useTodoStore;
