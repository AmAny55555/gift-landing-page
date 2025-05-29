import React from 'react'
import Image from 'next/image'
function Gift() {
  return (
    <div>
        <p className='font-press text-xs    text-center mt-10 mb-10'>A <span className='text-[#FFD502] bg-[#f9f5df] p-2  w-[70px] border border-amber-300 rounded-full'>Gift</span> as creative as they are</p>

        <div className='flex justify-center mt-40 '>
            <Image src={"/66.png"} width={70}  height={70} alt="pic1" className='  h-[300px]  w-[220px] z-30 object-contain -rotate-12 relative left-64 bottom-11'/>
                 <Image src={"/55.png"} width={70}  height={70} alt="pic2" className='z-40 h-[300px] w-[220px] -rotate-6 relative left-32 bottom-20'/>
                      <Image src={"/2.png"} width={70}  height={70} alt="pic3" className='z-50 h-[300px] w-[220px] relative bottom-28'/>
                           <Image src={"/3.png"} width={70}  height={70} alt="pic4" className='z-40 h-[300px] w-[220px] rotate-6 relative -left-32 bottom-20'/>
                                <Image src={"/4.png"} width={70}  height={70} alt="pic5" className='z-30 h-[300px] w-[220px] rotate-12 relative -left-64 bottom-11'/>
        </div>


      <div className='sm:p-5 md:p-0 flex justify-center items-center flex-col px-4'>
  <p className='text-center text-sm max-w-2xl font-poppins leading-tight'>
Can’t decide on the perfect set? Let them choose their own adventure with a LEGO® Gift Card. From epic builds to tiny treasures, they’ll get exactly what they love—when they want it.No stress, no guesswork, no expiration date. Just pure, build-it-your-way joy.
  </p>
  <button className='bg-[#015AD2] text-white w-[290px] max-w-full rounded-2xl h-[35px] mt-5 capitalize'>
    make their day
  </button>
</div>

    </div>
  )
}

export default Gift