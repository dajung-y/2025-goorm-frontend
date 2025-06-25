import React, { useReducer } from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

export default function Likes() {

  const initState = {
    likes: 0,
    dislikes: 0
  }

  function reducer(state, action){
    switch (action.type){
      case 'LIKE':
        return { ...state,
                 likes: state.likes +1
                }
      case 'DISLIKE' :
        return { ...state,
                 dislikes : state.dislikes +1
                }
    }
  }

  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div className='p-4 border'>
      <h1 className='text-2xl font-bold'>📋 게시판</h1>
      {/* 게시글 */}
      <div className='flex justify-between items-center my-2 px-4 py-2 w-2/3 bg-amber-100 rounded'>
        {/* 내용 */}
        <div>
          <p>게시글</p>
        </div>
        {/* 버튼 컨테이너 */}
        <div className='flex gap-4'>
          {/* 좋아요 */}
          <div>
            <button onClick={() => dispatch({type: 'LIKE'})}
                    className='rounded-full p-3 bg-white cursor-pointer'>
              <BiLike />       
            </button>
            <span className='ml-2'>{count.likes}</span>
          </div>
          {/* 싫어요 */}
          <div>
            <button onClick={() => dispatch({type: 'DISLIKE'})}
                    className='rounded-full p-3 bg-white cursor-pointer'>
              <BiDislike />
            </button>
            <span className='ml-2'>{count.dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
