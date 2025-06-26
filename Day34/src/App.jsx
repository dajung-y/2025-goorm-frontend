import Preorder from "./components/Preorder"
import Recursive from "./components/Recursive"
import { tree } from "./data/treeData"
import { comments } from "./data/commentsDummy";
import Comment from "./components/comments/Comment";
import Textbook from "./components/Textbook";
import { textbook  } from "./data/textbookDummy";
import Company from "./components/Company";
import { company } from "./data/companyDummy";

function App() {
  // const result = Preorder(tree);

  return (
    <>
    {/* <Recursive /> */}

    {/* <h3>전위 순회 결과</h3>
    <p>순서 : {result.join('->')}</p> */}
    
    {/* {
      comments.map( c => (
        <Comment key={c.id}
                 tree={c} />
      ))
    } */}

    <Textbook node={textbook} />
    <Company node={company} />
     
    </>
  )
}

export default App

/**
 트리 (tree)
 - 계층적 구조를 표현하는 구조
 - 시작점(루트)에서 출발해서 여러개의 자식을 가지고 뻗어나가는 구조
 - 리액트는 트리를 재귀 컴포넌트로 렌더링하는 방식
 - 프론트에서 가장 많이 사용되는 트리 : 일반 트리, 이진 트리, 문자열 검색에 트라이

 - 일반 트리 : 자식 노드 수가 제한 없음
            ex) 댓글, 사이드 메뉴 (프론트 UI 구조)
 - 이진 트리 : 왼쪽, 오른쪽 자식 최대 2개 까지만 가능
            ex) 정렬된 데이터 추가/삭제
 - 트라이 : 문자열 검색에 특화된 트리
            ex) 자동 완성, 검색어 추천 (검색 기능)

 재귀 컴포넌트
 - 자기 자신을 호출하는 컴포넌트
 */