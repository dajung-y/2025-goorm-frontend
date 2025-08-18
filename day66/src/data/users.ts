import { User } from "@/types/user";

export const users:User[] =[
  {
    id:1,
    name: "김철수",
    email: "cheolsoo@gmail.com",
    role: "FULL",
    isActive: true
  },
  {
    id:2,
    name: "이영희",
    email: "younghee@gmail.com",
    role: "BACK",
    isActive: true
  },
  {
    id:3,
    name: "박민수",
    email: "minsoo@gmail.com",
    role: "FRONT",
    isActive: false
  },
  {
    id:4,
    name: "한지민",
    email: "jimin@gmail.com",
    role: "FRONT",
    isActive: false
  },
  {
    id:5,
    name: "정수정",
    email: "soojeong@gmail.com",
    role: "BACK",
    isActive: true
  }
]