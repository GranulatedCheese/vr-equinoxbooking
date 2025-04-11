import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white select-none'>
        <div className='md:w-2/3 fixed top-5 md:left-1/6'>
          <img className='hidden md:block fixed left-9/50 w-45 border-1 border-dashed' src='./src/assets/img/equinoxpfp-qhd.jpg'/>
          <h1 className='ml-2 md:ml-60 pl-3 w-87 h-15 text-5xl font-cormorant border-1 border-dashed bg-[#634848]'>equinox booking.</h1>

          <div className='fixed mr-3 md:mr-83 top-5 right-0 md:ml-60 bg-[#634848]'>
            <p className='px-5 py-2 text-4xl font-cormorant border-1 border-dashed'>sign up.</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar