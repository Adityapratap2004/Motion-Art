import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-center  items-center md:items-start md:justify-start py-10 md:py-20 flex-col md:flex-row  w-full  text-center md:text-start text-lg  md:gap-24 lg:gap-36 '>
            <div className=' max-w-[140px]' >
                <h2 className=' mb-3'> <span className='text-xl font-semibold text_gradient'>Transform Your </span> <br className='md:hidden' /><span className='text-xl font-semibold  text_gradient '>&nbsp;Website</span> </h2>
                <h2 className='text-[#EEE5FF]'>  With Motion Art Effect</h2>
            </div>
            <div className='md:max-w-2xl lg:max-w-xl'>
                <div className='text-4xl md:text-6xl lg:text-7xl font-semibold mt-7 mb-10 md:mt-0 '>
                    <h1 className='text-[#EEE5FF] leading-[50px] md:leading-[70px] lg:leading-[80px]'>  Attract Your Visitors Attention With Colorful</h1>
                    <h1 className='mt-3'> <span className='text_gradient  '>Motion Art Effect</span></h1>
                </div>
                <p className=' text-[16px] md:text-[18px] leading-6 text-[#EEE5FFBD] '>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website</p>
            </div>
        </div>
    )
}

export default Hero
