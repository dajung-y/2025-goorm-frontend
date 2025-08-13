import React, { useState } from 'react'

export default function AdminAddproduct() {

  const [form, setForm] = useState({
    id: "",
    name: "",
    description : "",
    price : "",
    image : "",
    stock : ""
  });

  const [error,setError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!form.name || form.name.trim() === ""){
      setError("이름 입력은 필수입니다");
      return;
    }

  }

  const handleChange = (e) => {
    // price, stock 재고는 숫자만 허용하겠다.
    const name = e.target.name;
    const value = e.target.value;
    if(name === "price" || name === "stock"){
      if(value === "" || /^\d+$/.test(value)){
        setForm((f) => ({...f, [name]: value}));
      }
    } else {
      setForm((f) => ({...f,[name]:value}));
    }

    if(error && name === "name" && form.name.trim() !== ""){
      setError("");
    }

  }
  const handleReset = (e) => {
    
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">상품 추가</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 기본 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">상품 ID</label>
          <input
            name="id"
            placeholder="예: p1"
            value={form.id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">상품명</label>
          <input
            name="name"
            placeholder="예: 어피치 인형"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">가격(원)</label>
          <input
            name="price"
            inputMode="numeric"
            placeholder="예: 45000"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">재고</label>
          <input
            name="stock"
            inputMode="numeric"
            placeholder="예: 12"
            value={form.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* 설명 */}
      <div>
        <label className="block text-sm font-medium mb-1">설명</label>
        <textarea
          name="description"
          placeholder="예: 귀엽고 부드러운 어피치 캐릭터 인형"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded min-h-[100px]"
        />
      </div>

      {/* 이미지 URL + 미리보기 */}
      <div>
        <label className="block text-sm font-medium mb-1">이미지 URL</label>
        <input
          name="image"
          placeholder="예: /Apeach.jpeg 또는 https://..."
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {form.image && (
          <div className="mt-3">
            <p className="text-sm text-gray-500 mb-1">미리보기</p>
            {/* 외부 도메인은 next.config 이미지 도메인 허용 필요 */}
            <img
              src={form.image}
              alt="미리보기"
              className="max-h-48 rounded border"
            />
          </div>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* 액션 버튼 */}
      <div className="flex gap-3">
        <button type="submit" className="flex-1 bg-black text-white p-2 rounded">
          저장
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 border p-2 rounded"
        >
          초기화
        </button>
      </div>
    </form>
  </div>
  )
}
