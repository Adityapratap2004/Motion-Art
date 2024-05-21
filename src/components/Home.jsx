import React from 'react'
import Header from './Header'
import Hero from './Hero'
import TrustRating from './TrustRating'
import Broom from './Broom.jsx'
import ApplySection from './ApplySection.jsx'
import BrowserSection from './BrowserSection.jsx'
import FeatureSection from './FeatureSection.jsx'

const Home = () => {
  return (
    <div className='px-5 w-full max-w-[1300px]  mx-auto mt-[58px] py-7 text-white '>
        <Header/>
        <Hero/>
        <TrustRating/>
        <Broom/>
        <ApplySection/>
        <BrowserSection/>
        <FeatureSection/>
    </div>
  )
}

export default Home
