import React from 'react';
import { useLoaderData, useNavigate,  } from "react-router-dom";
import useTitle from '../../../hooks/useTitle';
import {AiFillHdd,AiFillCaretRight,AiFillCaretLeft, AiFillProfile,AiOutlineUser,AiOutlineMail,AiFillStar} from "react-icons/ai";

const Viewdetils = () => {

    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
      }
    useTitle('Details')
    const Product  = useLoaderData();

    console.log( Product )
    const { _id, name, quantity, price, rating, category, details, photo ,email,seller} = Product;

    
    const handleBooking = (id) => {
        navigate(`/booking/${_id}`);
      };
    return (
        <div className='m-10'>
          
          
        

            <div className="card lg:card-side bg-emerald-500 shadow-xl">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body text-white text-bold">
    <h2 className="card-title">{name}</h2>
    <p className='flex'><AiOutlineUser></AiOutlineUser>-<span className='font-bold'>Seller Name:</span> {seller}</p>
    <p className='flex'> <AiOutlineMail></AiOutlineMail> -<span className='font-bold'>Seller email:-</span> {email} </p>

    <p className='mt-3 mb-3'>{details}</p>
    <div className='flex mt-4 mb-4 text-xl text-white text-bold '>
    <p> Price-${price}</p>
    <p ><AiFillHdd></AiFillHdd>Quantity-{quantity}</p>
    <p>< AiFillStar></AiFillStar>Rating-{rating}</p>
    <p> <AiFillProfile></AiFillProfile>
  category:{ category}</p>
 </div>
    <div className="card-actions justify-end">
    <button  onClick={() =>handleBooking ()} className="btn bg-pink-200 text-black">Booking<AiFillCaretRight></AiFillCaretRight></button>
    </div>
  </div>
</div>


<div className='text-center'>
<button onClick={back} className="btn bg-black text-pink-400 mb-10 mt-4  center btn-lg  hover:bg-primary-700">
<AiFillCaretLeft></AiFillCaretLeft> Back
</button>
</div> 

          
        </div>
    );
};

export default Viewdetils;