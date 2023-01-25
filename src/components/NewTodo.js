import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function NewTodo() {
  return (
    <Stack spacing={3} direction="row" justifyContent="space-between" marginY={3}>
      <TextField label="create new todo" variant="standard" fullWidth/>
      <Button variant="contained">Add</Button>
    </Stack>
  )
}