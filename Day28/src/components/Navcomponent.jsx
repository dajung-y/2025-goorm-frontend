import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Navcomponent() {
  const categories = [
    {
      id: 1,
      title: "Dine by Design",
      description: "From a candlelit dinner on a cliffside pavilion to a starlit beach",
      link: '/sub',
    }, 
    {
      id: 2,
      title: "Local Living Encounters",
      description: "Step into the daily life of a local village, learn the art of traditional weaving",
      link: '/sub',
    }, 
    {
      id: 3,
      title: "Sunrise Awakening Rituals",
      description: "Being your morning with guided yoga on a cliff overlooking the sea.",
      link: '/sub',
    }, 
  ];
  return (
    // 전체 영역
    <div className='flex w-full h-[80vh] p-4 gap-8'>
      {/* left-side */}
      <section className='flex-1'>
        {/* text */}
        <div className='flex flex-col'>
          <h1 className='py-4 text-5xl'>
            <span className='block'>Only Here,</span>
            <span className='block'>Only With Us</span>
          </h1>
          <p className='py-4 mb-8 text-gray-400'>Discover experiences you won't find anywhere eles- thoughtfully designed to immerse you in the heart of the destination.</p>
        </div>
        {/* nav */}
        <div className='border-b border-gray-400'>
          {categories.map((category) => (
            <Link to={category.link}>
              <div key={category.id}
                  className='group flex justify-between p-4 border-t border-gray-400 hover:bg-gray-100 cursor-pointer'>
                <div className='flex flex-col mr-4'>
                <h3 className='text-xl pb-4'>{category.title}</h3>
                <p className='pb-4 text-sm text-gray-400'>{category.description}</p>
                </div>
                <div className='flex items-center'>
                  <BsFillArrowRightCircleFill 
                  className='w-8 h-8 text-slate-400 p-auto group-hover:text-sky-900'/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* right-side */}
      <section className='flex-1'>
        {/* image */}
        <div className='rounded-2xl h-full'>
          <img src='https://i.pinimg.com/736x/54/3c/3f/543c3f8aae744aebbca9314a3b675384.jpg' 
               alt='리조트 이미지'
               className='rounded-xl w-full h-full' />
        </div>
      </section>
    </div>
  )
}
