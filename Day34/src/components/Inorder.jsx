import React from 'react'

export default function Inorder(tree, result=[]) {
  
  console.log('호출시 tree: ', tree);
  // 데이터가 있으면 배열 출력
  // 없으면 null 
  if(!tree) return;
  Inorder(tree.left,result); // 왼쪽 자식
  result.push(tree.value); // 부모 노드 방문
  Inorder(tree.right,result);
  return result;
}
