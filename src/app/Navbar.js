'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='flex items-center justify-between bg-[#FFD504] px-[10%] md:px-[4%] relative'>
    
      <div className='logo'>
        <Image src={"/1.png"} width={60} height={50} alt='logo' />
      </div>

    
      <div className='links hidden lg:flex gap-10 capitalize text-[#00000066]'>
        <Link href={"#"} className='text-[#000000]'>home</Link>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Categories</Link>
        <Link href={"#"}>product <i className="fa-solid fa-angle-down text-xs"></i></Link>
        <Link href={"#"}>location</Link>
        <Link href={"#"}>contact us</Link>
      </div>

      <div className='third hidden lg:flex gap-2'>
        <button className="bg-white flex items-center gap-2 p-1 rounded-sm shadow text-sm font-medium cursor-pointer">
          <div
            className="w-5 h-5 rounded-full bg-center bg-cover"
            style={{ backgroundImage: "url('https://flagcdn.com/us.svg')" }}
          ></div>
          <div>USD</div>
          <i className="fa-solid fa-angle-down text-xs"></i>
        </button>

        <button className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-sm cursor-pointer'>
          <i className="fa-regular fa-circle-user text-white text-sm"></i>
        </button>

        <button className='bg-white w-[30px] h-[30px] flex items-center justify-center rounded-sm cursor-pointer'>
          <i className="fa-solid fa-trash-can text-black"></i>
        </button>
      </div>

      <div className='lg:hidden flex items-center gap-3'>
       
        <div className='flex gap-2'>
          <button className="bg-white flex items-center gap-1 px-2 py-1 rounded-sm shadow text-sm font-medium cursor-pointer">
            <div
              className="w-5 h-5 rounded-full bg-center bg-cover"
              style={{ backgroundImage: "url('https://flagcdn.com/us.svg')" }}
            ></div>
            <span>USD</span>
            <i className="fa-solid fa-angle-down text-xs"></i>
          </button>

          <button className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-sm cursor-pointer'>
            <i className="fa-regular fa-circle-user text-white text-sm"></i>
          </button>

          <button className='bg-white w-[30px] h-[30px] flex items-center justify-center rounded-sm cursor-pointer'>
         <i className="fa-solid fa-basket-shopping"></i>
           </button>
        </div>

    
        <button
          className='text-black text-2xl cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-[#FFD504] flex flex-col items-center gap-5 py-5 lg:hidden z-[500]' onClick={() => setMenuOpen(false)}>
          <Link href={"#"} className='capitalize text-black' >home</Link>
          <Link href={"#"} className='capitalize text-black'  >About</Link>
          <Link href={"#"} className='capitalize text-black'  >Categories</Link>
          <Link href={"#"} className='capitalize text-black'  >product</Link>
          <Link href={"#"} className='capitalize text-black'  >location</Link>
          <Link href={"#"} className='capitalize text-black' >contact us</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
