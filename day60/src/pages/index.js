import CreateForm from "@/components/CreateForm";

export default function Home() {
  return (
    <main className="flex justify-center">
      {/* 상품 추가 */}
      <section>
        <h3 className="mb-4 text-2xl text-center font-bold text-blue-600">상품 추가</h3>
        <CreateForm />
      </section>
      {/* 상품 리스트 */}
    </main>

  );
}

/**
 URL 개발자 마음대로 작성가능 (회사의 프레임워크를 따름)
 RESTfull API
 method
 GET(조회)
 POST(입력)
 PUT(수정)
 DELETE(삭제)
 API - 서버에 만들어 놓은 기능

 next에서 서버 만드는 방법
 - pages/폴더 안에 만들면 폴더와 파일을 자동으로 서버기능 URL이 됨
 */