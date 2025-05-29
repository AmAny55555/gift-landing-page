import React from 'react'
import Card from './Card'

function Section() {
  return (
    <div className='p-5 mt-10'>
        <p className='font-poppins font-medium text-nowrap sm:text-xl md:text-3xl  sm:px-5 lg:px-22'>Make Gifting as <span className='text-[#FF2A2A]'> Fun as Building</span></p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center lg:p-10">

  <Card src={"/z.png"} />
  <Card src={"/zz.png"} />
  <Card src={"/zzz.png"} />
  <Card src={"/zzzz.png"} />
</div>

    </div>
  )
}

export default Section