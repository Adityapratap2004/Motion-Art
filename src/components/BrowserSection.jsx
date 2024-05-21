import React from 'react'

const BrowserSection = () => {
    return (
        <div className='my-20 py-10 px-5 space-y-6 flex flex-col items-center bg-gradient-to-b from-[#0D061F] to-[#251E35] border-2 border-[#251E35]   to-100% rounded-3xl'>
            <h1 className='text-center  text-2xl text-primary md:text-3xl lg:text-4xl font-medium'>Supported by All Popular Browsers</h1>
            <p className=' text-lg text-secondary md:max-w-[380px] text-center '>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img src="/Images/motionarteffect-img8.png" alt="browser img" />
        </div>
    )
}

export default BrowserSection
