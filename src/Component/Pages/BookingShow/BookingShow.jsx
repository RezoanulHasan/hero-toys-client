
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { useState } from 'react';
import GetRandomColor from '../../Shared/GetRandomColor/GetRandomColor';
import {AiFillCaretLeft} from "react-icons/ai";

const BookingShow = () => {
    const {user} = useContext(AuthContext);
      // Random color
      const textColor = GetRandomColor();
    
    useTitle("Order-List");
    const loaderBookings = useLoaderData();
    const [bookings, setBookings] = useState(loaderBookings);
      console.log(bookings);
  
      const navigate = useNavigate();
      const back = () => {
          navigate(-1);
      }
      const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://hero-toys.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                   Swal.fire(
                               'Deleted!',
                              'Your Booking deleted.',
                              'close'
                              )
   const remaining = bookings.filter(booking => booking._id !== id);
   setBookings(remaining);
                    }
                })
        }
    }
  
  
          return (
          
            <div className='m-10'>
  
              <h1
          style={{ color: textColor }}
          className="font-bold font-sans text-3xl text-center mb-10 border-x-4 border-indigo-500"
        >
         All Order Bookings:  :- {bookings.length}
        </h1>
              <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Product Name</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Phone</th>
                      <th className="px-4 py-2">Price</th>
                  
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <Card
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
               
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <ToastContainer />

              <div className='text-center'>
<button onClick={back} className="btn bg-black text-pink-400 mb-10 mt-4  center btn-lg  hover:bg-primary-700">
<AiFillCaretLeft></AiFillCaretLeft>Back
</button>
</div> 
   
            </div>
  

          );
};

 const Card = ({ booking, handleDelete }) => {


 const { _id, username, productname, phone, price, category, date, email, photo } = booking;

          
return (
                <>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </td>
                <td className="px-4 py-2">
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                      {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{username}</td>
                <td className="px-4 py-2">{productname}</td>
                <td className="px-4 py-2">{date}</td>
                <td className="px-4 py-2">{phone}</td>
                <td className="px-4 py-2">${price}</td>
                <td className="px-4 py-2">
              
                </td>
              </tr>
    
              </>
            );
          };
            
        
  export default BookingShow;