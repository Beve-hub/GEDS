import React from 'react'
import IMG from '../../../assets/image/image_track.png'

const Header: React.FC = () => {
    return (
        <section className='mt-[8rem]'>
            <div className='grid justify-center'>
                <img src={IMG} alt='' className='max-w-full h-auto' />                
            </div>
        </section>
    )
}

export default Header
