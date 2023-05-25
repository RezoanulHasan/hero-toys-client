import React, {  useContext } from 'react';
import Swal from 'sweetalert2'

import useTitle from '../../../hooks/useTitle';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';






const Addproduct = () => {
   
useTitle("Add A-Toy");
const {user} = useContext(AuthContext);

  const handleAddProduct = event => {
   

   event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const email = form.email.value;
   
    const newProduct = { name, quantity, price, rating,category, details, photo ,seller,email}

    console.log(newProduct);

    // send data to the server
    fetch('https://hero-toys.vercel.app/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset();
        })
}

//bg-[#F4F3F0] 

return (

<>
      <div   className='m-5'>
      <div className=" bg-emerald-500 p-24">
            <h2 className="text-3xl  mb-5 text-center font-extrabold">Add  Toy</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name"  className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form price and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> $price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price " className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                 {/* form seller email and Seller name */}
                 <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller name </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" placeholder="seller name  " className="input input-bordered w-full" defaultValue={user?.displayName} required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  lg:ml-4">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="seller email" className="input input-bordered w-full" defaultValue={user?.email} required />
                        </label>
                    </div>
                </div>
                {/* form category and Photo url row */}
                <div className="md:flex mb-8">
                    <div className="form-control   lg:w-1/2  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="sub-scategory" className="input input-bordered w-full " required />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2  lg:ml-4  lg:w-1/2 ">

                    <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required  />
                        </label>
                    


                    </div>
                </div>
                {/* form details  row */}
                <div className="mb-8">
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="textarea" name="details" placeholder="Details" className="input input-bordered w-full rounded-md" required   />
                        </label>

                    </div>
         </div>
<input type="submit" value="Add Toy" className="btn btn-block" />

     </form>
        </div>
</div>

      
      </>
    );
};


export default Addproduct;