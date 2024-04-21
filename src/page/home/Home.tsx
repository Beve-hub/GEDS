import React from 'react'
import Hero from './screen/Hero'
import Parcel from './screen/Parcel'
import Package from './screen/Package'
import Footer from './screen/Footer'
import Review from './screen/Review'

interface Props {
  
}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <Hero/>
      <Parcel/>
      <Package/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Home
