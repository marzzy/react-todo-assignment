import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useCallback, useState} from "react";
import useSnackbarStore from "../stores/useSnackbarStore";
import useTodoStore from "../stores/useTodoStore";

export function NewTodo() {

    const [newTodo, setNewTodo] = useState('');

    const setSnackbarOpen = useSnackbarStore((state) => state.setOpen);
    const addTodo = useTodoStore((state) => state.add);

    const addNewTodo = () => {
        if (newTodo === "") {
            setSnackbarOpen();
            return;
        }
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <Stack spacing={3} direction="row" justifyContent="space-between" marginY={3}>
            <TextField label="create new todo" variant="standard" fullWidth value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
            <Button variant="contained" onClick={addNewTodo}>Add</Button>
        </Stack>
    )
}
