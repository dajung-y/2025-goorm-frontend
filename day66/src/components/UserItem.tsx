import { User } from '@/types/user'
import React from 'react'

export default function UserItem({user} : {user: User}) {
  return (
    <tr className='border-b border-gray-200 text-center'>
      <td className='p-2'>{user.name}</td>
      <td className='p-2'>{user.email}</td>
      <td className='p-2'>{user.role}</td>
      <td className='p-2'>{user.isActive ? "✅" : "❌"}</td>
    </tr>
  )
}
