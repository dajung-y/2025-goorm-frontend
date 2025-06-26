import React from 'react'

export default function Preorder(node, result=[]) {
  console.log('node: ',node);
    // 객체 없으면 함수 종료
    if(!node) return;
    result.push(node.value);  // 부모 방문
    Preorder(node.left, result); // 왼쪽 방문
    Preorder(node.right, result); // 오른쪽 방문
    return result;
}

/**
 트리를 어떤 순서로 검색을 할 지 결정하는 것 (순회)
 1. 깊이 우선 순회
    - 1. 전위 순회
         검색 순서
           루트 -> 왼쪽 -> 오른쪽
         트리 구조를 복사하거나 출력할 때 많이 쓰임 
    - 2. 중위 순회
         검색 순서
           왼쪽 -> 부모 -> 오른쪽
    - 3. 후위 순회
         검색 순서
          왼쪽 -> 오른쪽 -> 부모
         디렉토리 삭제, 서브트리의 합계 계산
  2. 너비 우선 순회

 */
