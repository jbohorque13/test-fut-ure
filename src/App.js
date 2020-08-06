import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import TodoList from './todos/TodoList'

const AppWrapper = styled.div`
  margin: 4rem 1rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  width: 100vw;
  height: 100vh;
`

const App = () => (
  <AppWrapper>
    <TodoList />
  </AppWrapper>
)

export default hot(module)(App)
