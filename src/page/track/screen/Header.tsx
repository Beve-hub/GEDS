import React from 'react'
import IMG from '../../../assets/image/image_track.png'

const Header: React.FC = () => {
    return (
        <section className='mt-[10rem]'>
            <div className='grid justify-center'>
                <img src={IMG} alt='' />                
            </div>
        </section>
    )
}

export default Header
