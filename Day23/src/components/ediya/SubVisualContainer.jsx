import React from 'react'
import SubVisualContainerNavbar from './SubVisualContainerNavbar'

export default function SubVisualContainer() {

  const menus = [
    {
      id: 1,
      category: "음료",
      title: "음료",
      content: "ALWAYS BESIDE YOU, EDIYA COFFEE",
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/736x/2d/db/eb/2ddbeb6d5723aa002a5ed68a504efaf0.jpg',
      category: "푸드",
      title: "베이커리",
      content: "ALWAYS BESIDE YOU, ",
    },
    {
      id: 3,
      category: "MD",
      title: "MD 상품",
      content: "ALWAYS BESIDE YOU, EDIYA MD",
    }
  ]

  return (
    <div className='visual__container'>
      <div className='visual__img'>
        <img src={menus[1].img} alt='배경이미지' />
      </div>
      <div className='visual__text'>
        <h1>{menus[1].title}</h1>
        <p>{menus[1].content}<b> EDIYA BAKERY</b></p>
        <SubVisualContainerNavbar menu={menus} />
      </div>
    </div>
  )
}
