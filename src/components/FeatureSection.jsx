import React from 'react'
import { featureSection } from '../assets/assets'

const FeatureSection = () => {
    return (
        <div className='flex flex-col items-center py-20'>
            <div className=' max-w-xl space-y-6 mb-10'>
                <h1 className='text-center  text-2xl text-primary md:text-3xl lg:text-4xl font-medium '>An All-Round Plugin With Powerful Features</h1>
                <p className=' text-center px-2 text-lg text-secondary  '>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-x-10 '>
            {
                featureSection.map((data)=>{
                    return <div key={data.key} className='p-5   bg-gradient-to-b from-[#0D061F] to-[#251E35] to-100% border-2 border-[#251E35] rounded-3xl space-y-4 my-4'>
                        <img src={data.img} alt={data.heading}/>
                        <h1 className='text-2xl text-primary md:text-3xl font-medium'>{data.heading}</h1>
                        <p className=' text-secondary text-lg'>{data.desc}</p>
                    </div>
                })
            }

            </div>

        </div>
    )
}

export default FeatureSection
