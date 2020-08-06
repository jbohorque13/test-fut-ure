import { TODO_CREATE, TODO_REMOVE, TODO_IS_COMPLECTED } from './actions'

export const todos = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case TODO_CREATE: {
      const { text } = payload
      const newTodo = {
        text,
        isCompleted: false,
      }
      return [{ _id: state.length, ...newTodo }, ...state]
    }

    case TODO_REMOVE: {
      const { text } = payload
      return state.filter((todo) => todo.text !== text)
    }

    case TODO_IS_COMPLECTED: {
      const { todo } = payload
      const todoFilter = state.filter(todoItem => todoItem._id !== todo._id);
      return [...todoFilter, { ...todo, isCompleted: true }];
    }

    default: {
      return state
    }
  }
}
