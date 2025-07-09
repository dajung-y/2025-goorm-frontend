import React from 'react'
import Header from './components/common/Header'
import TodoInput from './components/todos/TodoInput'
import TodoList from './components/todos/TodoList'

export default function App() {
  return (
    <>
      <Header />
      <TodoInput />
      <TodoList />
    </>
  )
}
