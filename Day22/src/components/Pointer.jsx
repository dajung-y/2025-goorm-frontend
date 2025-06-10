import React from 'react'

export default function Pointer() {

  // set함수명
  // 동작하는 방식
  // 1. 컴포넌트가 처음 렌더링됨 : [0,setIndex]
  // 2. state가 업데이트
  //    사용자가 버튼 클릭하면 setIndex() 호출
  //    리액트에 index = 1 기억하게 함
  // const [index, setIndex] = useState(0);

  // 마우스를 움직이면 빨간 점이 따라다니는 예제
  // 실시간으로 좌표를 업데이트해서 빨간 점을 이동할 수 있는 transform 이용
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
  return (
    <>
      <div onPointerMove={(e) => {
        console.log(e.clientX);
        console.log(e.clientY);

        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
        style={{
          width: '100vw',
          height: '100vh',
        }}>
      </div>

      <div style={{
        position: 'absolute', // 부모기준으로 절대 위치
        background: 'red',
        borderRadius: '50%',
        width: '1rem',
        height: '1rem',

        // 이동하는 transform
        transform: `translate(${position.x}px, ${position.y}.px)`
      }}>
      </div>
    </>
  )
}
