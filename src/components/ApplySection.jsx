import React from 'react'
import { applySection } from '../assets/assets'


const ApplySection = () => {


    return (
        <div className='relative lg:mb-[60%] md:mb-[70%] '>
            <h1 className='text-center text-primary font-semibold text-3xl md:text-[32px] lg:text-[42px] sm:max-w-[400px] md:max-w-xl lg:max-w-2xl mx-auto'> <span className='leading-[20px] md:leading-[58px]'>Apply On Any Section Or Enable For Whole Page</span></h1>
            <div className=' space-y-10 mt-10 md:mt-20 flex flex-col md:flex-row   '>
                {
                    applySection.map((data) => {
                        return <div key={data.key} className={`bg-gradient-to-b from-[#0D061F] to-[#251E35]  to-100% rounded-3xl border-2 border-[#251E35] p-8 flex flex-col items-center text-center space-y-7 md:absolute md:w-[49%] ${data.style}`}>
                            <h1 className='text-2xl text-primary md:text-3xl lg:text-4xl font-medium '>{data.heading}</h1>
                            <p className=' text-secondary text-[17px] leading-8'>{data.desc}</p>
                            <img src={data.img} alt={data.heading} />
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default ApplySection
