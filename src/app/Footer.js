import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div>
      <div className='border-t border-t-black mt-10 p-5 flex flex-col md:flex-row gap-10'>

<div className='col-1 w-[50%] flex items-center gap-4'>
  <div className='relative bottom-32'>
    <Image src={"/1.png"} alt='logo' width={140} height={140} />
  </div>

  <div>
    <Image src={"/111.png"} alt='loogo' width={200} height={200} className='w-[400px] h-[480px] object-fill' />
  </div>
</div>



     
        <div className='col-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-1/2'>

     
          <div>
            <h1 className='font-bold mb-4'>About us</h1>
            <ul className='text-sm text-[#00000099] space-y-1'>
              <li>About Toys n Toys</li>
              <li>about lego</li>
              <li>mission</li>
              <li>vision</li>
              <li>product certificate</li>
            </ul>
          </div>

       
          <div>
            <h1 className='font-bold mb-4'>Support</h1>
            <ul className='text-sm text-[#00000099] space-y-1'>
              <li>Contact Us</li>
              <li>Find Building Instructions</li>
              <li>Deliveries and Returns</li>
              <li>Payment Methods</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

       
          <div>
            <h1 className='font-bold mb-4'>More from us</h1>
            <ul className='text-sm text-[#00000099] space-y-1'>
              <li>LEGO Magazine</li>
              <li>LEGO Education</li>
              <li>LEGO Ideas</li>
              <li>LEGO Foundation</li>
              <li>Student & offers</li>
            </ul>
          </div>

        
          <div className='sm:col-span-2 lg:col-span-3 mt-6'>
            <h1 className='font-bold mb-4'>Attractions</h1>
            <ul className='text-sm text-[#00000099] space-y-1'>
              <li>LEGO House</li>
              <li>LEGOLAND Perks</li>
              <li>LEGOLAND Discovery Centers</li>
            </ul>
          </div>

        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center font-poppins text-xs mt-6 px-5 gap-4'>

        <div className='col-1 px-5'>
          <ul className='text-black flex flex-wrap gap-5'>
            <li className='font-bold cursor-pointer hover:underline'>PRIVACY POLICY</li>
            <li className='font-bold cursor-pointer hover:underline'>TERMS OF USE</li>
            <li className='font-bold cursor-pointer hover:underline'>COOKIES</li>
            <li className='font-bold cursor-pointer hover:underline'>LEGAL NOTICE</li>
            <li className='font-bold cursor-pointer hover:underline'>DIGITAL WELLBEING</li>
            <li className='font-bold cursor-pointer hover:underline'>ACCESSIBILITY</li>
          </ul>
        </div>

        <div className='col-2 px-5'>
          <ul className='flex flex-wrap gap-5 items-center'>
            <li className='font-bold'>Follow Us</li>
            <li className='cursor-pointer hover:underline'>Instagram</li>
            <li className='cursor-pointer hover:underline'>Facebook</li>
            <li className='cursor-pointer hover:underline'>Youtube</li>
            <li className='cursor-pointer hover:underline'>Twitter</li>
          </ul>
        </div>

      </div>

    
      <p className='text-xs mt-4 px-5 text-[#333] max-w-[1200px] mx-auto'>
        ©2025 BrickWorld Studios. All Rights Reserved. LEGO® and the LEGO® logo are trademarks of the LEGO Group. Use of this site constitutes acceptance of our Terms of Service and Privacy Policy. Products are intended for users aged 18 and up unless otherwise specified.
      </p>

    </div>
  )
}

export default Footer
