import React from 'react'
import Geds from './screen/Geds'
import Header from './screen/Header'
import Footer from '../home/screen/Footer'


const About: React.FC<Props> = () => {
    return (
        <div>
            <Header/>
            <Geds/>
            <Footer/>
        </div>
    )
}

export default About
