import SearchInput from '@/components/SearchInput'
import UserTable from '@/components/UserTable'
import React from 'react'

export default function page() {

  return (
    <div className='flex justify-center min-h-screen bg-gray-100'>
      <main className='my-4 w-2xl bg-white rounded-2xl'>
        <header className='w-full text-xl p-4 shadow'>Management</header>
        <div className='m-4'>
          <h2 className='text-2xl'>User Management</h2>
          <SearchInput />
          <UserTable />
        </div>
      </main>
    </div>
  )
}
