

import useTitle from '../../hooks/useTitle';
import Contact from './Contactus/Contact';
import CostomerReview from './CostomerReview/CostomerReview';
import InfoNum from './InfoNum/InfoNum';
import './Marquee.css'; 
import GetRandomColor from '../Shared/GetRandomColor/GetRandomColor';
import Gallery from './Gallery/Gallery';
import ProductCategory from './ProductCategory/ProductCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import home from'../../assets/home.json';
const Home = () => {
  const textColor = GetRandomColor();
  useEffect(() => {
    AOS.init();
  }, []);
  useTitle('Home')


    return (



        <div  className='m-5'>

           <div className='mt-20   lg:mt-5 m-5'>


           <div className="relative h-screen">
      <img
        className='absolute inset-0 object-cover object-center w-full h-full'
        src="https://i.ibb.co/2Kd2nSg/302497-chess.jpg"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className='m-6 flex absolute  space-between  items-center justify-center  gap-5' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='300'>

<div className= 'w-1/2 '>
        <h1 className="text-4xl text-pink-100 md:text-6xl font-bold mb-4 mx-4">Wel  <span className='text-green-600'>come</span> <br /> to <br /><span className='text-green-600'>  ! Hero</span> Toys</h1>
        <h1 className='text-white'>Exploring the World of Adventure and Imagination and Discover a Universe of Heroic Play with ! Hero Toys. Unlock the Power of Play with ! Hero Toys: A World of Endless Possibilities . Empowering Young Minds through Play: Discover the Magic of ! Hero Toys  </h1>
        </div>
        

        <div className="w-1/2  justify-end">
        <Lottie  className='justify-end'      animationData={home} loop={true} />
        </div>


      </div>
    </div>
 



  </div>


  
 
       

<Gallery></Gallery>
<ProductCategory></ProductCategory>
<InfoNum></InfoNum>

<CostomerReview></CostomerReview>

<Contact></Contact>


        </div>
    );
};

export default Home;