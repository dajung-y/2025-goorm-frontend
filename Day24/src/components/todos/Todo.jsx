import React from 'react'
import TrachIcon from '../../assets/icons/trashIcon.png'


export default function Todo({todo = []}) {
  return (
    <main>
      {
        // userID "1"인 데이터만 가져오기
        todo.filter(({userId}) => userId === 1)
        // id : key값
        // title: todo
        // completed: 체크 유무
        .map(({id, title, completed}) => (
          <div key={id} className='todo__item'> 
            <input type='checkbox' defaultChecked={completed} className='todo__cbox' />
            <span className='todo__title'>{title}</span>
            <button className='delete__btn'>
              <img src={TrachIcon} alt='휴지통' className='delete__btn__icon'/>
            </button>
          </div>
        ))
      }
    </main>
  )
}
