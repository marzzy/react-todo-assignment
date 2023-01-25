# Simple Todo List

This app is a todo list, most of components are ready, but it needed some functionality to works as expected

## How to run

Run these commands

```bash
yarn install
```

```bash
yarn start
```

## Tasks

1. the `NewTodo` contains input and add button, make it work in a way that after type the value in input and click in the add button a new todo added to the todo list
2. the `TodoList` contains a list of `TodoItem` example. create the todo list and use these component to render them
3. Implement the functionality of delete an todo and mark them as completed available(using the `useReducer` react hook)
4. Render a [mui Alert(with info style - blue)](https://mui.com/material-ui/react-alert/) when there is no todo to display
5. Use [mui snackbar](https://mui.com/material-ui/react-snackbar/) to raise an error when user try to click on the add new todo button if there is no description in the input (try to use `useContext` so we can rise error by calling a function in every place on the app)

## Notice

1. There is no need to style and adding css, and if you need some additional component, try to use mui components
2. Do not install and use any additional package to accomplish the tasks
