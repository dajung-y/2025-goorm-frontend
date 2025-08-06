import { getAllBlogs } from "@/lib/blog";
import matter from "gray-matter"

export default async function Home() {
// const fileText = `---
// title:"내 글"
// date:"2025-08-05"
// ---
// 여기는 본문입니다.`

// can not read a block mapping entry; a multiline key may not be an implicit key at line
// 작성할 때 공백 없어야함

  // 위에는 메타에서 제공되는 기본적인 변수명
  // 변수 이름 변경하고 싶은 경우에는 : 사용
  // const {data:meta,content:body} = matter(fileText);
  // console.log(meta);
  // console.log(body);

  // 비동기처리 호출하는 함수이므로 같이 기다려줘야함
  const {title,date,content} = await getAllBlogs();

  return (
   <main>
    <h1 className="text-blue-500">Hello</h1>
    <p>{title}</p>
    <p>{date}</p>
    <p>{content}</p>
   </main>
  )
}
