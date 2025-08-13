// 관리자 로그인 페이지
// /admin/login

import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react"

export default function AdminLoginPage(){

  // 리액트에서 페이지 이동할 때, app router는 next/navigation
  // page router는 next/router
  const router = useRouter();
  // 입력 상태
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post("/api/admin/login",form,{
        headers: {"Content-Type": "application/json"}
      });
      // localStorage에 로그인 상태 저장
      localStorage.setItem("adminLoggedIn","true");
      console.log("로컬 스토리지에 저장 완료");
      // 페이지 이동
      router.push("/admin");

    }catch(err){
      const message = err.response?.data?.message || "로그인 실패";
      setError(message);
    }
  }

  return(
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">관리자 로그인</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          로그인
        </button>
      </form>
    </div>
  )
}

/**
 useRouter
 push('/페이지명') - 페이지 이동(기본적으로 history에 기록)
 replace('/페이지명') - 페이지 이동(기존 history 대체)
 back() - 뒤로가기
 query - url 쿼리 파라미터 가져오기 /post?id=1
                              router.query.id
  pathname - 현재 페이지 경로
  asPath - 쿼리까지 포함한 전체 경로

 */