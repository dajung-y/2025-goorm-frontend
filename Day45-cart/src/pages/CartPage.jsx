import React from 'react'
import CartInfo from '../components/CartInfo'
import Header from '../components/common/Header'

export default function CartPage() {
  return (
    <div className='h-screen'>
      <Header />
      <main className='flex justify-end'>
        <section className='w-1/2'>
          <CartInfo />
        </section>
      </main>
    </div>
  )
}
