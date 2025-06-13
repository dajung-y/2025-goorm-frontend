import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import Todo from './Todo'
import AddComponent from './AddComponent'
import '../../css/todo.css'

export default function TodoPage() {
  const [todos, setTodos] = useState();
  const firstLoad = useRef(true);

  useEffect(() => {
    if(firstLoad.current){
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
      firstLoad.current = false;
    }
  },[todos])


  return (
    <>
      <Header />
      <Todo todo={todos} />
      <AddComponent />
    </>
  )
}
