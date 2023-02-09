import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useTodoContext} from "../contexts";
import {useCallback} from "react";

export function TodoItem(params) {

    const {text, completed, index} = params;
    const labelId = `checkbox-list-label-${text}`;

    const {dispatch} = useTodoContext();

    const deleteTodo = () => {
        dispatch({
            type: 'DELETE',
            index: index
        });
    }

    const toggleTodo = () => {
        dispatch({
            type: 'TOGGLE',
            index: index,
            toggle: !completed
        })
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="deleteTodo" onClick={deleteTodo}>
                    <DeleteIcon/>
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{'aria-labelledby': labelId}}
                        onChange={(event) => {
                            toggleTodo(event)
                        }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={text}/>
            </ListItemButton>
        </ListItem>
    )
}
