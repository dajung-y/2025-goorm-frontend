import React from 'react'
import ArticleCard from './ArticleCard'

export default function ArticleList() {
  const articles = [
    {
      id: 1,
      profile: '우유헛간',
      profileImg: '',
      time: '1시간 전',
      title: '도마치계곡에서 만난 인연이 일본 구주산 백패킹까지',
      content: '들어가기에 앞서 사진보단 영상으로 보시는게 좀더 편합니다 1시간 넘는 영상...',
      image: '',
      likes: 14,
      comments: 0
    },
    {
      id: 2,
      profile: '나비꿀생활',
      profileImg: '',
      time: '2시간 전',
      title: '[보태니컬아트] 2025 상반기 문화교실 보태니컬아트 작품발표회 관람 후기',
      content: '그동안 열심히 참여했던 보태니컬 아트 수업에서 완성한 그림들이 드디어 전시된다고 해서...',
      image: '',
      likes: 84,
      comments:22
    },
    {
      id: 3,
      profile: '당구당',
      profileImg: '',
      time: '2시간 전',
      title: '올화이트코디 정석, 이시안 여름패션 스타일링 팁',
      content: '안녕하세요 당구당입니다 솔로지옥4에 출연해 많은 관심을 받은 이시안 이시안 인스타 속 패션...',
      image: '',
      likes: 13,
      comments: 1
    }
  ]
  return (
    <div className='article-list'>
      <ArticleCard key={articles[0].id} {...articles[0]} />
    </div>
  )
}
