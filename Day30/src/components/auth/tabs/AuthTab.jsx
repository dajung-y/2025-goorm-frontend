import React from 'react'

export default function AuthTab({activeTab, setActiveTab, tabMenus}) {
    // default = 로그인

  return (
    <div className='flex bg-gray-200 border-2 border-gray-200 rounded-md text-gray-500 text-sm'>
      {tabMenus.map((tab,index) => (
        <button key={index}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-md cursor-pointer 
                            ${activeTab==tab ? `bg-white text-black font-semibold` 
                                             : `hover:bg-white hover:text-black hover:font-semibold`}`}>
                {tab}
        </button>
      ))}
    </div>
  )
}
