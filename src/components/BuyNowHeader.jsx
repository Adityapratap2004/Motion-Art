import React from 'react'


const BuyNowHeader = () => {
    return (
        <div className='bg-[#262626] flex items-center justify-between  fixed top-0 left-0 right-0 h-[56px] px-5 z-30'>
            <a href="/">
                <img src="/Images/heade-img.svg" alt="envato-market" className=' h-[18px]' />
            </a>
            <button className='bg-[#82b440] text-white px-5 py-1.5 rounded-md'>
                Buy now
            </button>
        </div>
    )
}

export default BuyNowHeader
