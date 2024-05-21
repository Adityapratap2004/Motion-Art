import React from 'react'

const Broom = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between py-32 gap-y-12 '>
            <div className='flex flex-col items-center md:items-start md:max-w-xl lg:max-w-2xl space-y-7'>
                <h1 className='text-primary font-semibold text-3xl md:text-[30px] lg:text-[40px]'> <span className=' leading-[20px] md:leading-[58px]'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</span></h1>
                <p className=' text-lg text-secondary'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                <div>
                    <button className='bg-gradient-to-r from-[#5E11FF] to-[#F87516]  to-100%  px-10 py-4  text-[22px] rounded-xl'>
                        Purchase From Envato &rarr;
                    </button>
                </div>
            </div>
            <div>
                <img src="/Images/motionarteffect-img5.png" alt="broom" className='h-[248px] w-[246px]' />
            </div>
        </div>
    )
}

export default Broom
