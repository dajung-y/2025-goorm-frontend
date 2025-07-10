import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useUserStore } from '../app/userStore';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const login = useUserStore((state)=> state.login);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!id || !pw){
      alert('모두 입력해주세요');
      return;
    }
    const successLogin = login(id,pw);   
    if(!successLogin){
      alert('회원정보를 찾을 수 없습니다');
    } 
  }

  useEffect(() => {
    if(isLoggedIn){
      navigate('/');
    }
  },[isLoggedIn,navigate]);


  return (
    <>
      <Header />
      <main className='flex justify-center pt-24 pb-100 min-h-screen bg-gray-100'>
        <section className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-center text-blue-600 mb-8'>로그인</h2>
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
            <button
              type="submit"
              className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer'>
              로그인
            </button>
            <div className='mt-4 text-center'>
              <p className='mb-2 text-gray-500'>아직 회원이 아니신가요?</p>
              <Link to='/join'>
                <button type="submit"
                        className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer'>
                  회원가입 하러가기
                </button>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
