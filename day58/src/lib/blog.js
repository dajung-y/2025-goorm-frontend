// md파일 읽고 파싱하는 유틸함수
// md파일의 앞 부분 메타데이터(front matter)와 본문 내용(content metter)

// 경로 가지고 올 때 사용하는 라이브러리
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export async function getAllBlogs(){
  // 마크다운 파일의 절대경로
  // join() 여러 경로 조각들을 OS에 맞게 경로를 합침
  // process.cwd(): 현재 프로젝트 루트 경로를 기준으로 함
  // 아래 경로들을 모두 모아서 하나의 문자열로 반환
  const filePath = path.join(process.cwd(),'src','blogs','blog1.md');

  console.log(filePath);

  // readFile(경로,인코딩)
  // await
  // - 파일을 전부 읽을 때까지 기다림(비동기처리)
  // 인코딩
  // - 파일을 텍스트(한글 포함 가능)로 읽음
  // fileContents
  // - 변수에는 읽은 마크다운의 텍스트 전체가 저장됨

  const fileContents = await readFile(filePath, 'utf8');
  // gray-matter가 나와서 분리시키기
  const {data, content} = matter(fileContents);
  return{
    title: data.title,
    date: data.date,
    content
  }
}