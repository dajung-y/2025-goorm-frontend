import React from 'react'

export default function On2() {

  const users = ['성규','동우','우현','성열','명수','성종'];

  // 팔로우 관계
  const eachFollow = [];

  for(let i=0; i<users.length; i++){
    for(let j=0; j<users.length; j++){
      // 본인과는 비교X
      if(i !== j){
        eachFollow.push(`${users[i]} 👉 ${users[j]}`);
      }
    }
  }

  // const arr = [[1,2],[2,3],[4,5]];
  // console.log(arr.flat());

  // const result = [1,2,3].map(x => [x, x*2]);
  // console.log(result);

  // const arr2 = [1,2,3].flatMap(x => [x, x*2]);
  // console.log(arr2);

  const friendPairs = users.flatMap((user1,index) => (
    users.slice(index+1).map(user2 => `${user1} 🤝 ${user2}`)
  ));

  return (
    <div>
      <h4>On2</h4>
      <p>각자 팔로잉하는 경우</p>
      <ul>
        {eachFollow.map((follow,index) => (
          <li key={index}>
            {follow}
          </li>
        ))}
      </ul>
      <p>총 비교한 횟수: {eachFollow.length}</p>

      <p>서로 팔로우 하는 경우</p>
      <ul>
        {friendPairs.map((following, index) => (
          <li key={index}>
            {following}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 O(n^2)
 - 중첩 반복문
 - 모든 사용자에서 서로 친구인지 비교하는 기능

 */

 /**
  flatMap()
  - 플랫하게 만든 후 매핑
  - 배열안에 배열이 들어있는 걸 한줄로 펼쳐주는 것
  */