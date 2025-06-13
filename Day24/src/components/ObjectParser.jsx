import React from 'react'

export default function ObjectParser() {
  const str ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  const testObj = {
    "name": "sungkyu",
    "job": ["singer", "idol", "actor"],
  }
  const jobList = testObj.job;

  // 구조 분해 할당
  const {address: city, geo} = str.address;

  return (
    <div>
      <h1>자바스크팁트의 json 중첩</h1>
      <h3>이름: {testObj.name}</h3>
      <h3>직업: {testObj.job[2]}</h3>

      <h5>도시: {str.address.city}</h5>

    </div>
  )
}
