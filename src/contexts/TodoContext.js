import {createContext, useContext, useReducer} from "react";
import TodoReducer from "../reducers/TodoReducer";
import {Snackbar} from "@mui/material";

const TodoContext = createContext();

const initialState = {
    snackbar_input: false,
    todos: [
        {
            text: 'this is an example',
            completed: true,
        },
        {
            text: 'this is 2nd example',
            completed: false
        }
    ]
}

export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({children}) => {

    const [state, dispatch] =
        useReducer(
            TodoReducer,
            initialState
        );

    const closeSnackbar = (event, reason) => {
        dispatch({
            type: 'SNACKBAR_INPUT',
            state: false
        });
    };

    return (
        <TodoContext.Provider value={{...state, dispatch}}>
            {children}
            <Snackbar
                open={state.snackbar_input}
                autoHideDuration={2500}
                message={'Type any keywords.'}
                onClose={closeSnackbar}
            />
        </TodoContext.Provider>
    )
}

export default TodoProvider
