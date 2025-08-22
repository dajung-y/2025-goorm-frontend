import FormTest from "@/components/FormTest";
import TodoPreviewCard from "@/components/TodoPreviewCard";

import { TodoPreview } from "@/types/todo";


export default function Home() {
  const todo : TodoPreview = {
    title: "수업듣기",
    completed: false,
  }
  return (
   <div>
    <h1>유틸리티 예제</h1>

    <FormTest />
    <TodoPreviewCard item={todo} />


    {/* <UserCard id={3} name={"Bob"} email={"bob.gmail.com"} /> */}
   </div>
  );
}

/**
 유틸리티 타입
 - 이미 정의해놓은 타입을 변환할 때 사용하기 좋은 문법
 - 유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭 <T,V>
 - 더 간결한 문법으로 타입 정의 가능

 자주 사용되는 좋은 유틸리티들 (실무)
 Pick<T,K>
 - 특정 타입(Type)에서 원하는 속성(Key)만 뽑아서 새로운 타입을 만드는 도구

 Omit

 Partial
 - 객체 타입의 모든 속성을 선택적을 바꿔주는 타입
 - 원하는 것만 데이터 보낼 수 있음

 Required
 - Partial과 반대

 Record
 */