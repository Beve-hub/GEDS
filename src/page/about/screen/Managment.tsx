import img from '../../../assets/image/image_team.png';
import img2 from '../../../assets/image/image_team2.png';
import img3 from '../../../assets/image/image_team3.png';
import img4 from '../../../assets/image/image_team4.png';



const Managment: React.FC = () => {
    return (
        <section  className="min-h-[30rem] my-16 flex md:flex-row grid-col-2 items-center justify-center ">

        <div>
        <div className='p-6'>              
                <p className='font-bold py-4 text-2xl text-[--primary-color]'>OUR MANAGMENT TEAM</p>
                   <p className='max-w-[75rem] text-light text-[#121212] text-balance md:text-balance'>Saw the opening of an office in Uithoorn in the Netherlands to service a growing European market and in 2005 opened a base in Great Yarmouth to service the busy oil industry to and fro Aberdeen.</p>
                 
        </div>

        <div className=' max-w-[80rem] my-12 grid justify-center items-center md:grid-cols-4 px-10 '>
            <div>
                <img src={img} alt=''className='w-[15rem]'/>
                <div>
                    <p className='font-bold'>Melanie Saunders</p>
                    <p>CEO</p>
                </div>
            </div>

            <div>
                <img src={img2} alt=''className='w-[15rem]'/>
                <div>
                    <p className='font-bold'>John Harris</p>
                    <p>Business Analyst</p>
                </div>
            </div>

            <div>
                <img src={img3} alt=''className='w-[15rem]'/>
                <div>
                    <p className='font-bold'>Julian Bodwen</p>
                    <p>Human Resource Manager</p>
                </div>
            </div>

            <div>
                <img src={img4} alt=''className='w-[15rem]'/>
                <div>
                    <p className='font-bold'>Jason Young</p>
                    <p>Head of Logistics</p>
                </div>
            </div>
        </div>
        
       <div>

       </div>

        </div>
      </section>
    )
}

export default Managment
