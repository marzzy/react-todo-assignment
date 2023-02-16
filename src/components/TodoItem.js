import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import useTodoStore from "../stores/useTodoStore";

export function TodoItem(params) {

    const {text, completed, index} = params;
    const labelId = `checkbox-list-label-${text}`;

    const deleteTodo = useTodoStore((state) => state.delete);
    const toggleTodo = useTodoStore((state) => state.toggle);

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="deleteTodo" onClick={(event) => {deleteTodo(index)}}>
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
                        onChange={(event) => {toggleTodo(index)}}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={text}/>
            </ListItemButton>
        </ListItem>
    )
}
