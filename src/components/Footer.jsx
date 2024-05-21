import React from 'react'

const Footer = () => {
    return (
        <div className=' z-30 bg-gradient-to-r from-[#F87516] to-[#5E11FF] to-100%  text-secondary text-xs md:text-sm '>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between  max-w-[1300px]  mx-auto  p-5 gap-y-4'> 
                <p className='text-center'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
                <ul className='flex gap-5'>
                    <li><a href="/">Documentation</a></li>
                    <li><a href="/">Support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
