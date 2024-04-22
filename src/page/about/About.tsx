import React from 'react'
import Geds from './screen/Geds'
import Header from './screen/Header'
import Managment from './screen/Managment'
import Footer from '../home/screen/Footer'


const About: React.FC = () => {
    return (
        <div>
            <Header/>
            <Geds/>
            <Managment/>
            <Footer/>
        </div>
    )
}

export default About
