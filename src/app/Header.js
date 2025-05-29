import React from 'react'
import Link from 'next/link'
import Gift from './Gift'

function Header() {
  return (
<div>
        <div className='links flex sm:w-[500px] lg:w-[500px] mx-auto items-center text-xs    rounded-3xl h-[40px] justify-center mt-10 bg-[#bfcfe8] gap-10  font-poppins '>
      <Link
        href="#"
        className='text-white bg-[#015AD2] w-[170px] h-[40px] rounded-3xl flex items-center justify-center md:-ml-22  '
      >
        Git Cards
      </Link>
      <Link
        href="#"
        className='text-[#015AD2] text-xs text-nowrap'
      >
        Buy Get Cards
      </Link>
      <Link
        href="#"
        className='text-[#015AD2] text-xs text-nowrap px-4 '
      >
        Check Balance
      </Link>


      
    </div>

    <Gift/>
</div>
  )
}

export default Header
