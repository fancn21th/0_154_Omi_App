const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const v4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const fakeTodos = {
  todos: [{
      id: v4(),
      text: 'I want to do this 1stly',
      completed: false
    },
    {
      id: v4(),
      text: 'I want to do this 2ndly',
      completed: true
    },
    {
      id: v4(),
      text: 'I want to do this 3rdly',
      completed: false
    },
  ]
};

export const fetchTodos = (filter) => delay(1000).then(() => {
  if (Math.random() > 0.95) {
    throw new Error('Boom!');
  }

  const remoteTodos = [
    ...fakeTodos.todos
  ]

  switch (filter) {
    case 'all':
      return remoteTodos;
    case 'active':
      return remoteTodos.filter(t => !t.completed);
    case 'completed':
      return remoteTodos.filter(t => t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
});

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeTodos.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeTodos.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });