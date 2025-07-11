import React, { useState } from 'react'
import { useBoardStore } from '../../app/stores/boardStore';

// 게시글 생성, 수정
// editingPost: 현재 수정중인 게시글 객체(id,title,content) 또는 null
// setEditingPost: 상위 컴포넌트에서 내려오는 상태 변경 함수, 수정 모드 종료할 때 null로 설정
export default function BoardForm({editingPost, setEditingPost}) {

  // 초기값 설정을 할 때 수정모드에 있는 editingPost 객체가 있다면 해당 게시글로 초기화
  // 새 글이면 빈 문자열로 초기화
  const [title,setTitle] = useState(editingPost?.title || "");
  const [content,setContent] = useState(editingPost?.content || "");

  // 저장소 가져오기
  const addPost = useBoardStore((s) => s.addPost);
  const updatePost = useBoardStore((s) => s.updatePost);

  // 폼 이벤트 핸들러
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!title || !content) return;

    // 객체가 있으면
    if(editingPost){
      updatePost(editingPost.id,title,content);
      setEditingPost(null); // 수정 종료
    } else{ // 객체가 없으면 새 글 등록
      addPost(title,content);
    }

    setTitle('');
    setContent('');
  }
  return (
    <main className='flex flex-col justify-center items-center pt-10'>
      <div className='w-2xl text-center'>
        <h1 className='mb-4 text-2xl text-gray-800 font-bold' >📋게시글 작성</h1>
        <form onSubmit={handleSubmit}
              className='flex flex-col space-y-2'>
          <input type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='제목'
                className='border border-gray-400 rounded' />
          <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder='내용'
                className='border border-gray-400 rounded' />
          <button type="submit"
                  className='py-2 bg-sky-400 text-white rounded cursor-pointer hover:bg-sky-500'>
            {editingPost ? "수정" : "등록"}
          </button>
          {editingPost && <button onClick={() => setEditingPost(null)}>취소</button>}
        </form>
      </div>
    </main>
  )
}
