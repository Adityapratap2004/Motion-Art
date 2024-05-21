import React from 'react'
import { trustRating } from '../assets/assets'

const TrustRating = () => {
    return (
        <div>
            <h3 className='text-center text-primary text-2xl mt-5 mb-16'>Trusted by thousands of users around the world</h3>
            <div className='flex flex-col sm:flex-row items-center sm:justify-around md:justify-between flex-wrap gap-y-5'>
                {
                    trustRating.map((rating) => {
                        return <div key={rating.key} className='flex gap-3 text-secondary'>
                            <img src={rating.img} alt="icon" />
                            <div className='flex flex-col justify-around py-3 ' >
                                <img src="/Images/motionarteffect-img4.png" alt="star" />
                                <div className='flex gap-2'>
                                    <span>{rating.score} score</span>
                                    <span>{rating.review} review</span>
                                </div>


                            </div>
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default TrustRating
