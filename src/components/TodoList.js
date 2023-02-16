import List from '@mui/material/List';
import {TodoItem} from './TodoItem';
import {Alert} from "@mui/material";
import useTodoStore from "../stores/useTodoStore";

export function TodoList() {

    const todos = useTodoStore((state) => state.list);

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {
                todos.length > 0
                    ? todos.map((todo, index) =>
                        <TodoItem key={index} index={index} text={todo.text} completed={todo.completed}/>
                    )
                    : <Alert severity="info">There are no todos to show.</Alert>
            }
        </List>
    );
}
