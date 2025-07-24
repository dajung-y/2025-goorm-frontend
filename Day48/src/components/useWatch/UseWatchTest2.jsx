import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

// 부분 컴포넌트
function NameWatcher({control}){
  const name = useWatch({control, name: 'name'});
  console.log('NameWatcher 컴포넌트 리렌더링');
  return <p>이름: {name}</p>
}

export default function UseWatchTest2() {
  const methods = useForm();
  console.log('APP 전체 컴포넌트 렌더링');
  return (
    <div>
      <form>
        <input {...methods.register('name')} />
        <NameWatcher control={methods.control} />
      </form>
    </div>
  )
}
