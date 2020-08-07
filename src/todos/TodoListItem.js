import React from 'react'

import styled from 'styled-components'

const ItemTodoWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px #ddd;
`
const TodoButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
  margin-left: 8px;
  background-color: #ee2222;
  color: #fff;
`
const ComplectedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #3892e5;
  color: #fff;
`
const TodoListItem = ({ todo, onRemovePressed, onMarkComplected = () => null }) => (
  <ItemTodoWrapper>
    <h3>{todo.text}</h3>
    <TodoButtonsContainer>
      {todo.isCompleted ? null : <ComplectedButton onClick={() => onMarkComplected(todo)}>Mark As Completed</ComplectedButton>}
      <RemoveButton onClick={() => onRemovePressed(todo.text)} className="remove-button">
        Remove
      </RemoveButton>
    </TodoButtonsContainer>
  </ItemTodoWrapper>
)

export default TodoListItem
