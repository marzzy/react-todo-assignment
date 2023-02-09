import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import {TodoItem} from './TodoItem';
import {useTodoContext} from "../contexts";
import {Alert} from "@mui/material";
import {useCallback, useEffect, useState} from "react";

export function TodoList() {

    const {todos} = useTodoContext();

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
