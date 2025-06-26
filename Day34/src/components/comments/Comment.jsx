import React from 'react'

export default function Comment({tree,level=0}) {
  return (
    <div style={{
                  marginLeft: level*20,
                  borderLeft: '1px solid #ccc',
                  paddingLeft: 8,
                  marginBottom: 10,
    }}>
      {/* 기본 댓글 */}
      <p>💌{tree.text}</p> 
      {/* 대댓글 있으면 추가 */}
      {
        tree.children?.map((child) => (
          <Comment key={child.id}
                   tree={child}
                   level={level+1} />
        ))
      }
    </div>
  )
}

/**
 정적 댓글 트리를 재귀로 구현

 댓글과 대댓글 렌더링 하는 컴포넌트

 레벨
 - 한 노드가 루트로부터 얼마나 떨어졌는지 나타내는 값
   기본적으로 레벨 0부터 시작
   레벨0은 루트
 */