import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useTodoContext} from "../contexts";
import {useCallback, useState} from "react";

export function NewTodo() {

    const {dispatch} = useTodoContext();
    const [newTodo, setNewTodo] = useState('');

    const addNewTodo = () => {
        if (newTodo === "") {
            dispatch({
                type: 'SNACKBAR_INPUT',
                state: true
            });
            return;
        }
        dispatch({
            type: 'ADD',
            todo: newTodo
        });
        setNewTodo('');
    }

    return (
        <Stack spacing={3} direction="row" justifyContent="space-between" marginY={3}>
            <TextField label="create new todo" variant="standard" fullWidth value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
            <Button variant="contained" onClick={addNewTodo}>Add</Button>
        </Stack>
    )
}
