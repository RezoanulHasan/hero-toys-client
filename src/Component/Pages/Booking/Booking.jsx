
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Swal from "sweetalert2";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Booking = () => {
    useTitle("Order");
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    const {user} = useContext(AuthContext);

    const Product = useLoaderData();

    console.log(Product);
    
    const { _id , name, quantity, price, rating , category, details, photo } = Product;
    
   
    
    const handleSubmit = (event) => {


      event.preventDefault();
      
      const form = event.target;
    
      const username = form.username ? form.username.value : '';
      const email = form.email ? form.email.value : '';
      const phone = form.phone ? form.phone.value : '';
      const productname = form.productname ? form.productname.value : '';
      const date = form.date ? form.date.value : '';
      const price  = form.price ? form.price.value : '';
      const quantity = form.quantity ? form.quantity.value : '';
      const category = form.category ? form.category.value : '';


      const booking = {
        username,
        productname,
        phone,
        price,
        category ,
        date,
        email,
        photo,
        quantity 
      };
    
      console.log(booking);


      fetch('https://hero-toys.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      
        },
    
        body:JSON.stringify(booking)
      })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: '  Booking Successfully',
                icon: 'success',
                confirmButtonText: 'CLOSE'
            })
        }  form.reset();
    })
      


    };




    return (



        <div  className='m-20'>

            <h1  className=' mb-5 font-bold text-2xl text-center' > Toy Name:{name} </h1>
            
            <form className= "bg-emerald-500 rounded-lg shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="username"
          placeholder="Enter username"
          defaultValue={user?.displayName} 
          required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="Enter email"
          defaultValue={user?.email}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          name="phone"
          placeholder="Enter phone number"
       
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="productname">
          Product Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="productname"
          placeholder="Enter product name"
          defaultValue={name} 
          required
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold text-gray-700   ont-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3    leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="price"
          placeholder="Enter price"
          defaultValue={price} 
     
          required
        />
      </div>
      <div className="mb-4">

  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
    Date
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
    type="date"
    name="date"
    placeholder="Enter date"
 
    required
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
    Quantity
  </label>
  <input
  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
  type="number"
  name="quantity"
  placeholder="Enter quantity"
  required
/>
</div>
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
    Category
  </label>
  <input
  className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  name="category"
  placeholder="category"
  readOnly
  required
  defaultValue={category}
/>
</div>
<div className="flex items-center justify-between">
  <button
    className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
 ORDER NOW
  </button>
</div>
</form>
<div className='text-center'>
<button onClick={back} className="btn bg-black text-pink-400 mb-10 mt-4  center btn-lg text-center hover:bg-primary-700">
Back
</button>
</div> 
  

        </div>
    );
};

export default Booking;