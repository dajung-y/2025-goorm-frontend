export const comments = [
  {
    id: 1,
    text: '안녕!',           // 최상위 댓글
    children: [
      { id: 2, text: '안녕~', children: [] }  // 대댓글
    ]
  },
  {
    id: 3,
    text: '리액트 재미있다!',
    children: []
  }
];