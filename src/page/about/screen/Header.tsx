import React from 'react'
import IMG from '../../../assets/image/image_about.png'

const Header: React.FC = () => {
    return (
        <section className='mt-[10rem]'>
            <div className='grid justify-center'>
                <img src={IMG} alt='' />
                <div className='absolute grid justify-center '>
                    <div>
                    <p className='text-white font-bold'>HOME</p>
                    <p className='text-white'>HOME | ABOUT</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Header
