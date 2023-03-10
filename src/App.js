import { NewTodo, TodoList } from './components'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography variant="h2" component="h1" marginY={8}>
            Things Todo
          </Typography>
          <NewTodo/>
          <TodoList/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
