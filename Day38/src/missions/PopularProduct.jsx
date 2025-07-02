import React from 'react'

export default function PopularProduct() {

  const products = [
    { name: "Keyboard", likes: 120, cart: 10 },
    { name: "Mouse", likes: 85, cart: 45 },
    { name: "Monitor", likes: 200, cart: 8 },
    { name: "Laptop", likes: 150, cart: 27 }
  ];

  const merge = (left, right, key) => {
    let result =[];
    // 요소가 남아 있는 동안 계속 비교
    while (left.length && right.length){
      if(left[0][key] > right[0][key]) result.push(left.shift());
      else result.push(right.shift());
    }
    // 한쪽이 남아있을 수도 있기 때문에 left,right 다 붙어야함
    return [...result,...left,...right];
  }

  // 배열 나누기
  const mergeSort = (arr, key) => {
    try{
      if (!key) {
        throw new Error('정렬 기준 키가 없습니다');
      }
      if (arr.length<=1) return arr;

      const mid = Math.floor(arr.length/2);
      const left = mergeSort(arr.slice(0,mid), key);
      const right = mergeSort(arr.slice(mid), key);

      return merge(left, right, key);

    } catch(err){
      console.log(err.message)
      alert(err.message);
    }
  }

  return (
    <main className='flex flex-col items-center p-8 w-screen h-screen bg-amber-50'>
      {/* 출력 */}
      <section className='p-8 bg-white rounded-2xl mb-8'>
        <h1 className='mb-8 text-3xl font-bold'>상품 순위 (인기순)</h1>
        <div className='flex flex-col items-center'>
          { mergeSort(products, 'likes').map((item,index) => (
            <p key={index}
              className={`text-lg ${index===0 ? 'text-red-500' : 'text-black'}`}>
                {index<3 ? '⭐️ ' : <span className='ml-6'></span>}
              {`${index+1}위 : ${item.name} (${item.likes})`}
            </p>
          ))}
        </div>
      </section>
      {/* 출력 */}
      <section className='p-8 bg-white rounded-2xl'>
        <h1 className='mb-8 text-3xl font-bold'>상품 순위 (장바구니 담긴 순)</h1>
        <div className='flex flex-col items-center'>
          { mergeSort(products, 'cart').map((item,index) => (
            <p key={index}
              className={`text-lg ${index===0 ? 'text-red-500' : 'text-black'}`}>
                {index<3 ? '⭐️ ' : ''}
              {`${index+1}위 : ${item.name} (${item.cart})`}
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}
