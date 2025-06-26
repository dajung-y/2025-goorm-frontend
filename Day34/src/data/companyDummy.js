export const company = {
  id:1,
  role: 'CEO',
  name: '김대표',
  children: [
    {
      id:2,
      role: '디자인팀장',
      name: '박팀장',
      children: [
        {
          id:3,
          role: '디자이너',
          name: '유디자이너',
          children: []
        },
      ]
    },
    {
      id:4,
      role: '개발팀장',
      name: '이팀장',
      children: [
        {
          id:5,
          role: '프론트엔드',
          name: '홍개발자',
          children: []
        },
        {
          id:6,
          role: '백엔드',
          name: '최개발자',
          children: []
        }
      ]
    }
  ]
}