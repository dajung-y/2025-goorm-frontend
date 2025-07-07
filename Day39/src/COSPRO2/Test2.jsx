import React from 'react'

export default function Test2() {

  const cases = [
    {price: 2500, grade:'V'},
    {price: 96900, grade:'S'}
  ];

  const discountRate = (price, grade) => {
    let rate = 0;
    switch (grade){
      case 'S':
        rate = 0.05
        break;
      case 'G':
        rate = 0.1
        break;
      case 'V':
        rate = 0.15
        break;
      default:
        break;
    }
    return price-(price*rate);
  }
  return (
    <div>
      <p>쇼핑몰 등급별 할인 금액</p>
      {cases.map((c, index) => (
        <p key={index}>{`반환 값은 : ${discountRate(c.price, c.grade)}`}</p>
      ))}
    </div>
  )
}
