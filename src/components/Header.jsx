import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between '>
        <img src='/Images/MotionArtEffect-logo.png' alt="motion art effect" className=' cursor-pointer'/>  
        <button className='hidden lg:block bg-white px-8 rounded-md text-lg  border-white border-2 transition duration-300 ease-out hover:bg-transparent text-black hover:text-white '>
            Purchase Now
        </button>    
    </div>
  )
}

export default Header
