import React, { useState } from 'react'

export default function Test2() {

  const [input, setInput] = useState('');
  const [isPalindrome, setisPalindrome] = useState(null);
  
  const checkPalindrome = () => {
    // a-z 아닌 문자 제외
    // g(전체 문자열에서 찾음)
    const str= input.toLowerCase().replace('/[^a-z]/g','');
    console.log(str);
    // 문자열 뒤집기
    const reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);

    setisPalindrome(str === reverseStr);
  }
  return (
    <div>
      <h1>팰린드롬 판단하기</h1>
      <input type='text'
             value={input}
             onChange={e => setInput(e.target.value)}
             placeholder='단어 또는 문장 입력' />
      <button onClick={checkPalindrome}>
        확인하기
      </button>
      { isPalindrome !==null && isPalindrome ? (
        <p>이 문장은 palindrome 입니다</p>
      ) : (
        <p>이 문장은 palindrome이 아닙니다</p>
      )}
    </div>
  )
}
