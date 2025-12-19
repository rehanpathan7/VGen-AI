import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#F2ECFF] mt-10 py-7 px-6 sm:px-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0'>

      <div className='text-center sm:text-left'>
        <span>© 2025 VGen. All rights reserved.</span>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <img src="/assets/rust.png" alt="Rust logo" className='w-5 h-5 sm:w-6 sm:h-6'/>
        <span>Runs on Rust</span>
      </div>

      <div className='flex justify-center sm:justify-end gap-4 sm:gap-7 text-center sm:text-left flex-wrap'>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>

    </div>
  )
}

