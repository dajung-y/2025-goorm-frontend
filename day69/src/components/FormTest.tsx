'use client'
import React, { useState } from 'react'

type FormData = {
  name: string;
  age: number;
  email : string;
}

export default function FormTest() {
  const [form, setForm] = useState<Partial<FormData>>({});
  const handleChange = () => {
    setForm((prev) => (
      {...prev,name:"Alice"}
    ));
  }
  const handleSubmit = () => {

  }
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
        Partial Form 예제
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name ?? ''}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email ?? ''}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="나이"
          value={form.age ?? ''}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          제출
        </button>
      </div>

      <pre style={{ marginTop: 16, background: '#f9fafb', padding: 12 }}>
        {JSON.stringify(form, null, 2)}
      </pre>
    </div>
  )
}
