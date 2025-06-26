import React, { useState } from 'react'

export default function Textbook({node, level=0}) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 상태 반대로
    setIsActive(!isActive);
  }

    return(
      <div className='m-4 border border-blue-700'>
        {/* 반복금지 */}
        { 
          level === 0 && (
            <h1 className='p-4 text-2xl font-bold text-blue-900'>📚 교과서 목차</h1>
          )
        }
        <button onClick={handleClick}
                className='cursor-pointer'>
          <p className='p-4'>
            <span className='pr-2'>{isActive ? '📖' : '📘'}</span>  
            {node.title}</p> 
        </button>
        {
          isActive && node.children?.map((child,index) => (
            <Textbook key={index}
                      node={child}
                      level={level+1} />
          ))
        }
      </div>
    )
}
