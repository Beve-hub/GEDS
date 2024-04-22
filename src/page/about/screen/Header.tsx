import React from 'react'
import IMG from '../../../assets/image/image_about.png'

const Header: React.FC = () => {
    return (
        <div className='mt-[10rem] grid justify-center'>
           <img src={IMG} alt=''/>
        </div>
    )
}

export default Header
