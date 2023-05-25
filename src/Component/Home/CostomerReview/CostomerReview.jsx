import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import GetRandomColor from '../../Shared/GetRandomColor/GetRandomColor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CostomerReview = () => {
  useEffect(() => {
    AOS.init({ once: true, mirror: true }); // Enable AOS reverse option
  }, []);

  const textColor = GetRandomColor();

    return (

      <>
     
<div className="m-10">

<br />
<br />
  <h1  style={{ color: textColor }}className='mb-20 font-bold mt-20  font-sans text-3xl  text-center  border-x-4 border-indigo-500 '> CUSTOMER-REVIEW  </h1>


  <div className="gap-10 grid grid-cols lg:grid-cols-4 md:grid-cols-2 ">
     
  <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="card w-full bg-emerald-500 shadow-2xl"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {/* Content */}
        <figure>
    <img className='object-cover w-60 h-60 lg:h-full md:h-full mb-6 rounded shadow-lg xl:h-80' src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="man" />
        </figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary">Riya</div>
    </h2>
    <p>"I love shopping for superhero toys on this website!"</p>
    <div className="card-actions justify-end">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 0" />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
      </div>
    </div>
  </div>
      </motion.div>



      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="card w-full bg-emerald-500 shadow-2xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {/* Content */}
        <figure>
    <img className='object-cover w-60 h-60 lg:h-full md:h-full mb-6 rounded shadow-lg xl:h-80' src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="man" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary">Riad</div>
    </h2>
    <p>"I found a wide range of products from different franchises like Marvel and DC"</p>
    <div className="card-actions justify-end">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 0" />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
      </div>
    </div>
  </div>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="card w-full bg-emerald-500 shadow-2xl"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {/* Content */}
        <figure>
    <img className='object-cover w-60 h-60 lg:h-full md:h-full mb-6 rounded shadow-lg xl:h-80' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="man" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary">Hasan</div>
    </h2>
    <p>"I've been collecting superhero toys for years, and this website has become my go-to place for all my toy needs"</p>
    <div className="card-actions justify-end">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 0" />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
      </div>
    </div>
  </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="card w-full bg-emerald-500 shadow-2xl"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {/* Content */}
        <figure>
    <img className='object-cover w-60 h-60 lg:h-full md:h-full mb-6 rounded shadow-lg xl:h-80' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="man" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary">Rezoanul</div>
    </h2>
    <p>The checkout process was smooth, and my order arrived quickly. Highly recommended!"</p>
    <div className="card-actions justify-end">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 0" />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
      </div>
    </div>
  </div>
      </motion.div>

    </div>

        </div>

       </>
    );
};

export default CostomerReview;
