import {
  fetchTodos as fetchTodosApi,
  addTodo as addTodoApi,
  toggleTodo as toggleTodoApi,
} from "../api/index";

const data = {
  todos: [],
};

export default data;

export function fetchTodos(filter) {
  fetchTodosApi(filter).then((todos) => {
    data.todos = todos;
  });
}

export function addTodo(text) {
  addTodoApi(text).then((todo) => {
    data.todos.push(todo);
  });
}

export function toggleTodo(id) {
  toggleTodoApi(id).then((todo) => {
    let match = data.todos.find((todo) => todo.id === id);
    match = todo;
  });
}
