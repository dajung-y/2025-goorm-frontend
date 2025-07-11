import { createSlice } from "@reduxjs/toolkit";

// 크롬 브라우저는 v8엔진에서 동작

const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers : {
    createPost(state,action){
      state.push({
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
      })
    },
    deletePost(state,action){
      state = state.filter((post) => post.id ==action.payload)
    },
    getPost(state,action){

    }

  }
})

export const {createPost} = postSlice.actions
export default postSlice.reducer