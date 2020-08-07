import React from 'react'
import { connect } from 'react-redux'

import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { removeTodo, markCompleted } from './actions'

import styled from 'styled-components'

const ListTodoWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const TodoList = ({ todos = [], onRemovePressed, onMarkComplected }) => (
  <ListTodoWrapper>
    <h1>TODO Application</h1>
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem
        key={index}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkComplected={onMarkComplected}
      />
    ))}
  </ListTodoWrapper>
)

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onMarkComplected: (todo) => { dispatch(markCompleted(todo)) },
  onRemovePressed: (text) => dispatch(removeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
