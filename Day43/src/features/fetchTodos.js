export async function fetchTodos() {
  console.log('fetchTodo 요청');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

  try{
    console.log('API 통신 성공');
    if(!response.ok){
      throw new Error('Fail to fetch todos');
    }
    const data = response.json();
    return data;
  } catch(err) {
    console.log(err.message);
  }
}