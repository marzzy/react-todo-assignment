import {NewTodo, TodoList} from './components'
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {Snackbar} from "@mui/material";
import useSnackbarStore from "./stores/useSnackbarStore";

const theme = createTheme();

function App() {

    const setSnackbarClose = useSnackbarStore((state) => state.setClose);
    const snackbarStatus = useSnackbarStore((state) => state.status);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Typography variant="h2" component="h1" marginY={8}>
                    Things Todo
                </Typography>
                <NewTodo/>
                <TodoList/>
            </Container>
            <Snackbar
                open={snackbarStatus}
                autoHideDuration={2500}
                message={'Type any keywords.'}
                onClose={setSnackbarClose}
            />
        </ThemeProvider>
    );
}

export default App;
