import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, removeTodo } from '../features/todos/todoSlice';

// todo list 출력 UI
export default function TodoList() {

  // useSelector()
  // - 전역 상태(store)에서 필요한 데이터를 꺼내는 hook
  const {todos, isLoading, error} = useSelector(state => state.todos);
  // 삭제 action을 위한 dispatch
  const dispatch = useDispatch();

  console.log(todos);

  // 첫 렌더링 시, todos 리스트가 업데이트 될 때마다 실행
  useEffect(() => {
    dispatch(getTodos());
  },[dispatch])

  if(isLoading){
    return <p>로딩 중...</p>
  }
  if(error){
    return <p>에러 발생 : {error}</p>
  }
  return (
    <div>
      <ul>
        { todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
