import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import {TodoItem} from './TodoItem';

export function TodoList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <TransitionGroup>
        {/* render todos here, like this: */}
        <TodoItem key="1" text="this is an example" completed/>
        <TodoItem key="2" text="this is 2nd example" completed={false}/>
      </TransitionGroup>
    </List>
  );
}