import PersonCard from '@/components/PersonCard'
import type { AnyPerson } from '@/types/people'
import React from 'react'

export default function page() {
  const personList: AnyPerson[] =[
    {
      id: 1,
      name: "sam",
    },
    {
      id:2,
      name: "amy",
      grade: 3,
      major: "cs",
    },
    {
      id:3,
      name: "kai",
      department: "dev",
    }
  ]
  return (
    <div>
      <h3>회원관리</h3>
      {
        personList.map((p) => (
          <PersonCard key={p.id}
                      human={p} />
        ))
      }
    </div>
  )
}
