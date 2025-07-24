import { useState } from "react";

export function useTodo(){
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos, {text:input, done: false}]);
      setInput('');
    }
  };
  const toggleTodo = (index) => {
    const updates = todos.map((todo,i) => 
      i === index ? {...todo, done: !todo.done} :todo
    );
  setTodos(updates);
  }
  return {input, setInput, todos, setTodos, addTodo, toggleTodo}
}