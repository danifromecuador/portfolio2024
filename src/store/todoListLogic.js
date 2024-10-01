export const add = (set, input) => (set(state => ({
  TodoList: {
    ...state.TodoList,
    todos: [...state.TodoList.todos, { id: Date.now(), text: input, completed: false }]
  }
})))

export const markAsDone = (set, e) => (set(state => {
  let index = 0
  for (let i = 0; i < state.TodoList.todos.length; i++) {
    if (state.TodoList.todos[i].id === e.id) index = i
  }
  let newTodos = [...state.TodoList.todos]
  newTodos[index].completed === true ? newTodos[index].completed = false : newTodos[index].completed = true
  return ({
    TodoList: {
      ...state.TodoList,
      todos: newTodos
    }
  })
}))

export const deleteAllCompleted = (set) => (set(state => {
  let notCompleted = []
  for (let i = 0; i < state.TodoList.todos.length; i++) {
    if (state.TodoList.todos[i].completed === false) notCompleted.push(state.TodoList.todos[i])
  }
  return ({
    TodoList: {
      ...state.TodoList,
      todos: notCompleted
    }
  })
}))