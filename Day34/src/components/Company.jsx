import React, { useState } from 'react'

export default function Company({node, level=0}) {

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  }


  return (
    <div className='m-4 border border-sky-300'>
      {level===0 && (
        <h1 className='m-4 text-2xl font-bold text-sky-900'>🏙️ 회사 조직도</h1>
      )}
      <button onClick={handleShow}
              className='cursor-pointer'>
        <p className='p-4'>
          <span className='pr-2'>🧑‍💻</span>
          {`${node.name} (${node.role})`}</p>
      </button>
      {
        isShow && node.children?.map((child) => (
          <Company key={child.id}
                   node={child}
                   level={level+1} />
        ))
      }

    </div>
  )
}
