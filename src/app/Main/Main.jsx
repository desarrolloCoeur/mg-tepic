import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Review from '../components/Review'

const Home = () => {
  return (
    <div className='w-full bg-[#101010]'>
      <Hero/>
      <Service/>
      <Review/>
    </div>
  )
}

export default Home
