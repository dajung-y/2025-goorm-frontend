import React, { useState } from 'react'
import Header from '../components/Header'
import { useUserStore } from '../app/userStore';
import { useNavigate } from 'react-router-dom';

export default function JoinPage() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwc, setPwc] = useState('');

  const join = useUserStore((state) => state.join);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!id || !pw || !pwc){
      alert('모두 입력해주세요');
      return;
    }
    if(pw!==pwc){
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    join(id,pw);
    alert('회원가입이 완료되었습니다')
    navigate('/login');
  }

  return (
    <>
      <Header />
      <main className='flex justify-center pt-24 pb-100 min-h-screen bg-gray-100'>
        <section className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-center text-blue-600 mb-8'>회원가입</h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold mb-1'>아이디</label>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className='w-full px-4 py-2 border border-gray-400 rounded-lg' />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-1'>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className='w-full px-4 py-2 border border-gray-400 rounded-lg' />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-1'>비밀번호확인</label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={pwc}
                onChange={(e) => setPwc(e.target.value)}
                className='w-full px-4 py-2 border border-gray-400 rounded-lg' />
            </div>
            <button
              type="submit"
              className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer'>
              회원가입
            </button>
          </form>
        </section>
      </main>

    </>
  )
}
