import { users } from '@/data/users'
import React from 'react'
import UserItem from './UserItem'

export default function UserTable() {
  return (
    <table className='w-full'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='p-2'>이름</th>
          <th className='p-2'>이메일</th>
          <th className='p-2'>직무</th>
          <th className='p-2'>활동중</th>
        </tr>
      </thead>
      <tbody>
        { users.map((user) => (
          <UserItem key={user.id}
                    user={user} />
        ))}
      </tbody>
    </table>
  )
}
