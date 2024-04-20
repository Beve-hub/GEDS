import React from 'react'
import Hero from './screen/Hero'
import Parcel from './screen/Parcel'
import Package from './screen/Package'
import Footer from './screen/Footer'

interface Props {
  
}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <Hero/>
      <Parcel/>
      <Package/>
      <Footer/>
    </div>
  )
}

export default Home
