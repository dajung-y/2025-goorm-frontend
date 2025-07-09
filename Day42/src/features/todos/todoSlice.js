// 하나의 기능(할 일 관리) 단위 모듈

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./fetchTodos";


// 비동기 Thunk 만들기
// 할 일 목록을 서버에서 불러오는 비동기 요청 함수
// 내부에 3가지 액션 타입 자동으로 생성
export const getTodos = createAsyncThunk(
  'todos/getTodos', // Thunk의 이름(여러 비동기함수 구별)
  async (_,thunkAPI) => {
    try{
      const response = await fetchTodos();
      console.log(`Thunk 안 API 응답 : ${response}`);
      return response;
    } catch(err){
      // 실패시 에러메시지 담아서 redux에 전달
      // thunkAPI 변수에 여러개의 객체 담아옴
      // rejectWithValue() 에러메시지 담아서 rejected액션으로 넘김
      // payload에 에러 상태 들어감
      return thunkAPI.rejectWithValue(err.message);
    }
  }
)

const initialState = {
  todos: [],        // 할 일 목록 담을 배열
  isLoading: false, // 데이터 로딩 중인지 여부
  error: false      // API 호출 실패시 에러 메시지 담는 필드

}

// createSlice()
// - 상태(state)와 그 상태를 바꾸는 방법(reducer)을 한 파일에서 한번에 만드는 함수
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: { // 액션과 상태 변경 로직 정의
    addTodo(state,action){
      state.todos.push({
        id: Date.now(),          // 현재 시간을 기준으로 고유한 Id 부여
        title: action.payload,   // 입력된 텍스트가 제목이 됨
      });
    },
    // 액션 객체 {type, payload} 형태
    // type: 무슨일이 일어났는지 나타내는 문자열
    //      {type: 'todos/removeToo, payload: todo.id}
    // payload: 그 액션과 함께 전달된 데이터가 담긴 변수
    removeTodo(state,action){
      state.todos = state.todos.filter((todo) => todo.id!==action.payload);
    }
  },
  // 비동기 액션인 실행을 하면 자동으로 상태 전환해서 저장하는 코드
  // addCase(action,reducer)
  // 비동기 액션 중에 특정 상태가 발생했을 때 어떤상태를 바꿀지 정의하는 함수
  extraReducers : (builder) => {
    builder
      // 데이터 요청중 pending
      .addCase(getTodos.pending, (state) => {           // 비동기 시작
        state.isLoading = true; // 로딩 시작 표시
        state.error = null;     // 이전 에러 초기화
      })                                          
      .addCase(getTodos.fulfilled, (state,action) => {  // 성공
        state.isLoading = false;       // 로딩 끝
        state.todos = action.payload;  // 응답 데이터 저장
      })    
      .addCase(getTodos.rejected, (state,action) => {   // 실패
        state.isLoading = false;        // 로딩 끝
        state.error = action.payload;   // 에러 메시지 저장
      })    
  }
});

// 액션과 reducer 내보내기
export const {addTodo, removeTodo} = todosSlice.actions;

// 기본적으로는 todosSlice의 reducer를 내보냄 (스토어에 등록하기 위해서)
export default todosSlice.reducer;