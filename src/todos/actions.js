export const TODO_CREATE = 'TODO_CREATE'
export const TODO_IS_COMPLECTED = 'TODO_IS_COMPLECTED';

export const createTodo = (text) => ({
  type: TODO_CREATE,
  payload: { text },
})

export const TODO_REMOVE = 'TODO_REMOVE'
export const removeTodo = (text) => ({
  type: TODO_REMOVE,
  payload: { text },
})

export const markCompleted = (todo) => ({
  type: TODO_IS_COMPLECTED,
  payload: { todo }
})
