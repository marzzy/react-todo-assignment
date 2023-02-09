export default function TodoReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.todo,
                        completed: false,
                    }
                ]
            }
        case 'DELETE':
            return {
                ...state,
                todos: [...state.todos.filter((todo, index) => index !== action.index)]
            }
        case 'TOGGLE':
            state.todos[action.index].completed = action.toggle;
            return {
                ...state,
                todos: [
                    ...state.todos,
                ]
            }
        case 'SNACKBAR_INPUT':
            return {
                ...state,
                snackbar_input: action.state
            }
        default:
            return state
    }
}
