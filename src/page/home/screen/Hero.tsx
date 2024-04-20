import img from '../../../assets/image/image_1.png';

const Hero: React.FC = () => { 

  return (
   <div>
    <img src={img} className="w-screen object-cover h-screen" alt='' /> 
   </div>
  )
}

export default Hero

